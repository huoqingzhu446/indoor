import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'minio';
import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { normalizePublicBaseUrl } from '../uploads/uploads.utils';

interface UploadBufferInput {
  key: string;
  buffer: Buffer;
  contentType: string;
}

interface PersistRemoteObjectInput {
  sourceUrl: string;
  key: string;
  fallbackContentType?: string;
}

@Injectable()
export class StorageService implements OnModuleInit {
  private readonly logger = new Logger(StorageService.name);
  private readonly client: Client;
  private readonly publicBucket: string;
  private readonly privateBucket: string;
  private readonly publicBaseUrl: string;

  constructor(private readonly configService: ConfigService) {
    const endpoint = new URL(
      this.configService.get<string>('OSS_ENDPOINT') ?? 'http://127.0.0.1:9000',
    );

    this.client = new Client({
      endPoint: endpoint.hostname,
      port: Number(endpoint.port || (endpoint.protocol === 'https:' ? 443 : 80)),
      useSSL: endpoint.protocol === 'https:',
      accessKey: this.configService.get<string>('OSS_ACCESS_KEY') ?? 'minioadmin',
      secretKey: this.configService.get<string>('OSS_SECRET_KEY') ?? 'minioadmin',
    });

    this.publicBucket = this.configService.get<string>('OSS_BUCKET_PUBLIC') ?? 'room-ai-public';
    this.privateBucket = this.configService.get<string>('OSS_BUCKET_PRIVATE') ?? 'room-ai-private';
    this.publicBaseUrl = normalizePublicBaseUrl(
      this.configService.get<string>('OSS_PUBLIC_BASE_URL') ??
        this.configService.get<string>('APP_BASE_URL') ??
        'http://127.0.0.1:9000',
    ).replace(/\/$/, '');
  }

  async onModuleInit() {
    await this.ensureBucket(this.publicBucket, true);
    await this.ensureBucket(this.privateBucket, false);
  }

  getPublicBucket() {
    return this.publicBucket;
  }

  createObjectKey(prefix: string, fileName: string, extensionOverride?: string) {
    const extension = extensionOverride ?? extname(fileName) ?? '';
    const safeBaseName = fileName
      .replace(/\.[^.]+$/, '')
      .trim()
      .replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 48);

    const datedPrefix = `${prefix}/${new Date().toISOString().slice(0, 10)}`;
    const baseName = safeBaseName || 'asset';

    return `${datedPrefix}/${baseName}-${randomUUID()}${extension}`;
  }

  buildPublicUrl(bucket: string, key: string) {
    return `${this.publicBaseUrl}/${bucket}/${key}`;
  }

  buildStoredObjectKey(bucket: string, key: string) {
    return `${bucket}/${key}`;
  }

  async uploadPublicBuffer(input: UploadBufferInput) {
    await this.client.putObject(
      this.publicBucket,
      input.key,
      input.buffer,
      input.buffer.byteLength,
      {
        'Content-Type': input.contentType,
      },
    );

    return {
      bucket: this.publicBucket,
      key: input.key,
      objectKey: this.buildStoredObjectKey(this.publicBucket, input.key),
      publicUrl: this.buildPublicUrl(this.publicBucket, input.key),
      contentType: input.contentType,
      size: input.buffer.byteLength,
    };
  }

  async persistRemotePublicObject(input: PersistRemoteObjectInput) {
    const response = await fetch(input.sourceUrl);

    if (!response.ok) {
      throw new Error(`Failed to download remote object: ${response.status} ${input.sourceUrl}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const contentType =
      response.headers.get('content-type') ?? input.fallbackContentType ?? 'application/octet-stream';
    const buffer = Buffer.from(arrayBuffer);

    return this.uploadPublicBuffer({
      key: input.key,
      buffer,
      contentType,
    });
  }

  private async ensureBucket(bucket: string, publicRead: boolean) {
    const exists = await this.client.bucketExists(bucket);

    if (!exists) {
      await this.client.makeBucket(bucket);
      this.logger.log(`Created bucket ${bucket}`);
    }

    if (publicRead) {
      await this.client.setBucketPolicy(bucket, this.buildPublicReadPolicy(bucket));
    }
  }

  private buildPublicReadPolicy(bucket: string) {
    return JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: { AWS: ['*'] },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucket}/*`],
        },
      ],
    });
  }
}
