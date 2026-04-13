const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

export interface UploadPolicyResponse {
  uploadId: string
  objectKey: string
  publicUrl: string
  contentType: string
  expiresIn: number
}

export interface Project {
  id: string
  name: string
  roomType: string
  styleCode: string
  budgetLevel: string
  status: string
  originalImageUrl: string
  constraints: string[]
  modules: ProjectModule[]
  uploadedModuleCount: number
  requiredModuleCount: number
  previewReady: boolean
  createdAt: string
  updatedAt: string
  latestRenderTaskId?: string
}

export interface ProjectModule {
  id: string
  moduleCode: string
  moduleName: string
  sortOrder: number
  status: string
  publicUrl?: string
}

export interface RenderResult {
  id: string
  imageUrl: string
  styleCode: string
  title: string
  score: number
}

export interface RenderTask {
  id: string
  projectId: string
  styleCode: string
  budgetLevel: string
  constraints: string[]
  status: string
  progressPercent: number
  createdAt: string
  updatedAt: string
  results: RenderResult[]
}

export interface ShareLink {
  id: string
  projectId: string
  shareCode: string
  shareUrl: string
  title: string
  description: string
  status: string
  createdAt: string
}

export interface ShareSnapshot {
  share: ShareLink
  project: Project
  results: RenderResult[]
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

async function uploadRequest<T>(path: string, body: FormData): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export function createUploadPolicy(payload: {
  fileName: string
  contentType: string
  fileSize: number
}) {
  return request<UploadPolicyResponse>('/v1/uploads/policy', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function uploadRoomPhoto(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return uploadRequest<UploadPolicyResponse>('/v1/uploads/file', formData)
}

export function createProject(payload: {
  name: string
  roomType: string
  originalImageUrl: string
  uploadId?: string
  styleCode: string
  budgetLevel: string
  constraints: string[]
}) {
  return request<Project>('/v1/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getProject(projectId: string) {
  return request<Project>(`/v1/projects/${projectId}`)
}

export function createRenderTask(
  projectId: string,
  payload: {
    styleCode: string
    budgetLevel: string
    constraints: string[]
    candidateCount: number
  },
) {
  return request<RenderTask>(`/v1/projects/${projectId}/render`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function uploadProjectModule(projectId: string, moduleCode: string, file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return uploadRequest<Project>(`/v1/projects/${projectId}/modules/${moduleCode}/upload`, formData)
}

export function getRenderTask(taskId: string) {
  return request<RenderTask>(`/v1/render-tasks/${taskId}`)
}

export function getProjectResults(projectId: string) {
  return request<RenderResult[]>(`/v1/projects/${projectId}/results`)
}

export function createShare(
  projectId: string,
  payload: {
    title: string
    description: string
  },
) {
  return request<ShareLink>(`/v1/projects/${projectId}/share`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getShare(shareCode: string) {
  return request<ShareSnapshot>(`/v1/shares/${shareCode}`)
}
