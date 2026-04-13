import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service';
import { normalizePublicBaseUrl } from '../uploads/uploads.utils';
import { getProjectModuleTemplate } from '../projects/project-module.templates';
import { AssetKind } from '@prisma/client';

@Injectable()
export class SharesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listAll() {
    const shares = await this.prisma.shareLink.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return shares.map((share) => this.mapShare(share));
  }

  async create(projectId: string, input: { title: string; description: string }) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new NotFoundException(`Project ${projectId} not found`);
    }

    const shareCode = `shr_${randomUUID().slice(0, 8)}`;
    const publicWebBaseUrl = (
      process.env.PUBLIC_WEB_BASE_URL
        ? normalizePublicBaseUrl(process.env.PUBLIC_WEB_BASE_URL)
        : ''
    ).replace(/\/$/, '');
    const share = await this.prisma.shareLink.create({
      data: {
        projectId,
        shareCode,
        shareUrl: publicWebBaseUrl
          ? `${publicWebBaseUrl}/share/${shareCode}`
          : `/share/${shareCode}`,
        title: input.title,
        description: input.description,
      },
    });

    return this.mapShare(share);
  }

  async getSnapshot(shareCode: string) {
    const share = await this.prisma.shareLink.findUnique({
      where: { shareCode },
    });

    if (!share) {
      throw new NotFoundException(`Share ${shareCode} not found`);
    }

    await this.ensureModulesInitialized(share.projectId);

    const project = await this.prisma.project.findUnique({
      where: { id: share.projectId },
      include: {
        constraints: true,
        modules: {
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException(`Project ${share.projectId} not found`);
    }

    const results = await this.prisma.renderResult.findMany({
      where: { projectId: share.projectId },
      orderBy: [{ score: 'desc' }, { createdAt: 'asc' }],
    });

    const uploadedModules = project.modules.filter((item) => item.status === 'uploaded').length;
    const previewReady = project.modules.length > 0 && uploadedModules === project.modules.length;

    return {
      share: this.mapShare(share),
      project: {
        id: project.id,
        name: project.name,
        roomType: project.roomType,
        originalImageUrl: project.originalImageUrl,
        styleCode: project.styleCode,
        budgetLevel: project.budgetLevel,
        constraints: project.constraints.map((item) => item.value),
        modules: project.modules.map((item) => ({
          id: item.id,
          moduleCode: item.moduleCode,
          moduleName: item.moduleName,
          sortOrder: item.sortOrder,
          status: item.status,
          publicUrl: item.publicUrl ?? undefined,
        })),
        uploadedModuleCount: uploadedModules,
        requiredModuleCount: project.modules.length,
        previewReady,
        status: project.status,
        createdAt: project.createdAt.toISOString(),
        updatedAt: project.updatedAt.toISOString(),
        latestRenderTaskId: project.latestRenderTaskId ?? undefined,
      },
      results: results.map((item) => ({
        id: item.id,
        imageUrl: item.imageUrl,
        styleCode: item.styleCode,
        title: item.title,
        score: item.score,
      })),
    };
  }

  private mapShare(share: {
    id: string;
    projectId: string;
    shareCode: string;
    shareUrl: string;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
  }) {
    return {
      id: share.id,
      projectId: share.projectId,
      shareCode: share.shareCode,
      shareUrl: share.shareUrl,
      title: share.title,
      description: share.description,
      status: share.status,
      createdAt: share.createdAt.toISOString(),
    };
  }

  private async ensureModulesInitialized(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: {
        modules: true,
        assets: {
          where: { kind: AssetKind.original },
          orderBy: { createdAt: 'asc' },
          take: 1,
        },
      },
    });

    if (!project || project.modules.length > 0) {
      return;
    }

    const moduleTemplate = getProjectModuleTemplate(project.roomType);
    const firstAsset = project.assets[0];

    await this.prisma.projectModule.createMany({
      data: moduleTemplate.map((item, index) => ({
        projectId: project.id,
        moduleCode: item.moduleCode,
        moduleName: item.moduleName,
        sortOrder: item.sortOrder,
        status: index === 0 ? 'uploaded' : 'pending',
        publicUrl: index === 0 ? firstAsset?.publicUrl ?? project.originalImageUrl : null,
        objectKey: index === 0 ? firstAsset?.objectKey ?? null : null,
        contentType: index === 0 ? firstAsset?.contentType ?? null : null,
        fileSize: index === 0 ? firstAsset?.fileSize ?? null : null,
      })),
      skipDuplicates: true,
    });
  }
}
