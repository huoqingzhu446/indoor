import { Worker } from 'bullmq';
import { Redis } from 'ioredis';

const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379/0';
const API_BASE_URL = (process.env.API_BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
const AI_SERVICE_BASE_URL = (process.env.AI_SERVICE_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '');
const INTERNAL_SERVICE_TOKEN = process.env.INTERNAL_SERVICE_TOKEN ?? '';
const RENDER_GENERATE_QUEUE = 'render-generate';

interface RenderExecutionPayload {
  taskId: string;
  projectId: string;
  sourceImageUrl: string;
  roomType: string;
  styleCode: string;
  budgetLevel: string;
  constraints: string[];
  candidateCount: number;
  providerCode: string;
  modelCode: string;
}

interface RenderExecutionResponse {
  job_id: string;
  provider: string;
  image_model: string;
  text_model?: string;
  prompt_preview?: string;
  status: string;
  candidates: Array<{
    title: string;
    image_url: string;
    score: number;
  }>;
}

const connection = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null,
});

function buildHeaders() {
  return {
    'Content-Type': 'application/json',
    ...(INTERNAL_SERVICE_TOKEN ? { 'x-internal-token': INTERNAL_SERVICE_TOKEN } : {}),
  };
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...buildHeaders(),
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Request failed (${response.status}) for ${url}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}

async function markFailed(renderTaskId: string, errorMessage: string) {
  await request(`${API_BASE_URL}/internal/render-tasks/${renderTaskId}/fail`, {
    method: 'POST',
    body: JSON.stringify({ errorMessage: errorMessage.slice(0, 400) }),
  });
}

const worker = new Worker(
  RENDER_GENERATE_QUEUE,
  async (job) => {
    const renderTaskId = String(job.data.renderTaskId);
    console.log(`[worker] starting render task ${renderTaskId}`);

    try {
      await request(`${API_BASE_URL}/internal/render-tasks/${renderTaskId}/mark-processing`, {
        method: 'POST',
      });

      const payload = await request<RenderExecutionPayload>(
        `${API_BASE_URL}/internal/render-tasks/${renderTaskId}/execution-payload`,
      );

      const result = await request<RenderExecutionResponse>(
        `${AI_SERVICE_BASE_URL}/v1/render-jobs/execute`,
        {
          method: 'POST',
          body: JSON.stringify({
            project_id: payload.projectId,
            source_image_url: payload.sourceImageUrl,
            room_type: payload.roomType,
            style_code: payload.styleCode,
            budget_level: payload.budgetLevel,
            constraints: payload.constraints,
            candidate_count: payload.candidateCount,
          }),
        },
      );

      await request(`${API_BASE_URL}/internal/render-tasks/${renderTaskId}/complete`, {
        method: 'POST',
        body: JSON.stringify({
          providerCode: result.provider,
          modelCode: result.image_model,
          textModel: result.text_model,
          promptPreview: result.prompt_preview,
          candidates: result.candidates.map((item) => ({
            title: item.title,
            imageUrl: item.image_url,
            score: item.score,
          })),
        }),
      });

      console.log(`[worker] completed render task ${renderTaskId}`);
      return { renderTaskId, status: 'completed' };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown worker error';
      console.error(`[worker] render task ${renderTaskId} failed: ${message}`);
      await markFailed(renderTaskId, message);
      throw error;
    }
  },
  {
    connection,
    concurrency: 2,
  },
);

worker.on('error', (error) => {
  console.error(`[worker] queue error: ${error.message}`);
});

worker.on('failed', (job, error) => {
  console.error(`[worker] job ${job?.id ?? 'unknown'} failed: ${error.message}`);
});

console.log(`[worker] listening on ${RENDER_GENERATE_QUEUE}`);

async function closeWorker() {
  await worker.close();
  await connection.quit();
}

process.on('SIGINT', async () => {
  await closeWorker();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closeWorker();
  process.exit(0);
});
