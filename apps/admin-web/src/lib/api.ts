const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

export interface Project {
  id: string
  name: string
  roomType: string
  styleCode: string
  budgetLevel: string
  status: string
  createdAt: string
}

export interface RenderTask {
  id: string
  projectId: string
  styleCode: string
  budgetLevel: string
  status: string
  progressPercent: number
  createdAt: string
}

export interface ShareLink {
  id: string
  projectId: string
  shareCode: string
  shareUrl: string
  status: string
  createdAt: string
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export function getProjects() {
  return request<Project[]>('/v1/projects')
}

export function getRenderTasks() {
  return request<RenderTask[]>('/v1/render-tasks')
}

export function getShareLinks() {
  return request<ShareLink[]>('/v1/shares')
}
