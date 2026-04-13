export function normalizePublicBaseUrl(baseUrl: string) {
  return baseUrl.replace('://localhost', '://127.0.0.1');
}
