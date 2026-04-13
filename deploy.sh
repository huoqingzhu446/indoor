#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

ENV_FILE="${ENV_FILE:-.env.production}"
NO_PULL=0
SKIP_DB_PUSH=0
FOLLOW_LOGS=0

usage() {
  cat <<'EOF'
Usage: bash deploy.sh [options]

Options:
  --no-pull         Skip git pull and deploy the current server worktree
  --skip-db-push    Skip Prisma db push
  --logs            Follow nginx/api/ai-service/worker logs after deployment
  -h, --help        Show this help message
EOF
}

log() {
  printf '\n[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

die() {
  printf '\n[ERROR] %s\n' "$*" >&2
  exit 1
}

compose() {
  docker compose --env-file "$ENV_FILE" -f docker-compose.yml -f docker-compose.prod.yml "$@"
}

wait_for_ai_service() {
  local max_attempts="${1:-20}"
  local attempt=1

  while (( attempt <= max_attempts )); do
    if compose exec -T ai-service python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health').read()" >/dev/null 2>&1; then
      log "Health check passed: ai-service"
      return 0
    fi

    sleep 3
    ((attempt++))
  done

  die "Health check failed: ai-service"
}

wait_for_http() {
  local url="$1"
  local label="$2"
  local max_attempts="${3:-20}"
  local attempt=1

  while (( attempt <= max_attempts )); do
    if curl --silent --show-error --fail --head "$url" >/dev/null 2>&1; then
      log "Health check passed: $label -> $url"
      return 0
    fi

    sleep 2
    ((attempt++))
  done

  die "Health check failed: $label -> $url"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-pull)
      NO_PULL=1
      ;;
    --skip-db-push)
      SKIP_DB_PUSH=1
      ;;
    --logs)
      FOLLOW_LOGS=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      usage
      die "Unknown option: $1"
      ;;
  esac
  shift
done

[[ -f "$ENV_FILE" ]] || die "Missing $ENV_FILE. Create it from .env.production.example first."

command -v docker >/dev/null 2>&1 || die "docker is not installed."
command -v git >/dev/null 2>&1 || die "git is not installed."

docker info >/dev/null 2>&1 || die "docker daemon is not available."

if (( NO_PULL == 0 )); then
  if [[ -n "$(git status --porcelain)" ]]; then
    die "Working tree is dirty. Commit/revert changes first, or rerun with --no-pull."
  fi

  local_branch="$(git rev-parse --abbrev-ref HEAD)"
  log "Pulling latest code for branch $local_branch"
  git pull --rebase --autostash origin "$local_branch"
else
  log "Skipping git pull and deploying current server worktree"
fi

export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0

log "Building and starting containers"
compose up -d --build --pull never

log "Current compose status"
compose ps

if (( SKIP_DB_PUSH == 0 )); then
  log "Running Prisma db push inside api container"
  compose exec -T api sh -lc './node_modules/.bin/prisma db push'
else
  log "Skipping Prisma db push"
fi

log "Running local health checks"
wait_for_http "http://127.0.0.1/" "user-web"
wait_for_http "http://127.0.0.1/admin/" "admin-web"
wait_for_http "http://127.0.0.1/api/" "api"
wait_for_http "http://127.0.0.1/api/docs" "swagger"
wait_for_ai_service

log "Deployment completed successfully"

if (( FOLLOW_LOGS == 1 )); then
  log "Following recent logs"
  compose logs -f nginx api ai-service worker
fi
