# Room AI MVP Architecture

## 1. Product scope

This project targets a mobile-first H5 experience that also works on desktop and can later be wrapped by a mini program shell.

The first release should focus on four user-facing outcomes:

1. Upload a rough room photo from mobile.
2. Generate 2-4 design renderings with selectable styles.
3. Open a lightweight 3D preview of the same room concept.
4. Share a project page with clients.

The product should be positioned as a "renovation inspiration preview" tool, not a construction-grade 3D reconstruction system.

## 2. Deployment topology

Use Docker from the start, with the frontend and backend separated by responsibility.

Recommended runtime services:

- `user-web`: H5 user app. Handles upload, project pages, result pages, 3D preview, and shared pages.
- `admin-web`: admin console. Handles AI provider settings, style templates, prompt templates, task monitoring, users, and projects.
- `api`: NestJS business API. Handles auth, project lifecycle, task creation, sharing, and admin configuration.
- `ai-service`: FastAPI AI adapter. Handles MiniMax requests, prompt assembly, image downloads, and result callbacks.
- `worker`: async job consumer. Handles long-running image generation and retries.
- `postgres`: core relational database.
- `redis`: queues, cache, rate limit, and transient task state.
- `minio`: development object storage, replaceable with OSS/S3 in production.
- `nginx`: ingress and reverse proxy.

## 3. Project structure

Use a monorepo so the teams can move quickly while still keeping clear separation between applications.

```txt
3D/
  apps/
    user-web/
    admin-web/
  services/
    api/
    ai-service/
    worker/
  packages/
    shared/
    ui/
  infra/
    nginx/
    docker/
  docs/
    architecture.md
  docker-compose.yml
  .env.example
```

Recommended frontend stack:

- `user-web`: Vue 3 + Vite + TypeScript + Vant + Pinia + Vue Router + Three.js
- `admin-web`: Vue 3 + Vite + TypeScript + Element Plus + Pinia + Vue Router

Recommended backend stack:

- `api`: NestJS + Prisma or TypeORM
- `ai-service`: FastAPI + Pydantic + httpx
- `worker`: Node.js + BullMQ, or a NestJS worker app if you prefer a single Node backend stack

## 4. Frontend module split

### `user-web`

Main pages:

- `/`: landing or entry page
- `/upload`: upload room photo
- `/create`: choose style and constraints
- `/project/:id`: project detail
- `/project/:id/results`: rendering results
- `/project/:id/preview-3d`: lightweight 3D preview
- `/share/:shareCode`: public share page

Main modules:

- authentication
- project creation
- image upload
- style selection
- task progress polling
- rendering gallery
- 3D preview
- client sharing

### `admin-web`

Main pages:

- `/login`
- `/dashboard`
- `/projects`
- `/tasks`
- `/users`
- `/styles`
- `/ai-providers`
- `/model-configs`
- `/prompt-templates`
- `/share-pages`
- `/system-settings`

Main modules:

- role-based access
- AI provider settings
- MiniMax model selection
- prompt template editing
- style preset management
- task queue monitoring
- failed task retry
- share content control
- usage and cost reports

## 5. Backend API modules

### `api` service modules

- `auth`
  - user login, admin login, token refresh, role checks
- `users`
  - user profile, usage quota, project ownership
- `projects`
  - project creation, photo upload metadata, room type, style selection
- `assets`
  - upload credentials, asset records, thumbnails, original/result image metadata
- `render-tasks`
  - create rendering task, poll status, list results, retry task
- `scene3d`
  - generate and query lightweight room scene JSON
- `shares`
  - create public share link, query share page content, revoke share link
- `styles`
  - style catalog, preset tags, display copy
- `ai-configs`
  - AI provider configuration, active model, fallback strategy, cost controls
- `admin`
  - dashboards, moderation, audit logs, task health

### `ai-service` modules

- `providers.minimax.text`
  - room summary, prompt expansion, style phrasing
- `providers.minimax.image`
  - text-to-image or image-to-image generation calls
- `prompt-builder`
  - assemble prompts from room type, style, budget, and protection rules
- `image-postprocess`
  - fetch generated images, normalize, compress, optional upscaling
- `quality-check`
  - remove broken or low-quality outputs
- `callback`
  - receive async task result and update API

### `worker` queues

- `render:generate`
- `render:postprocess`
- `scene:build`
- `share:cover`
- `task:retry`

## 6. Core business flow

### A. Generate renderings

1. User uploads a room photo.
2. `api` creates a project and stores original asset metadata.
3. User selects style, budget range, and constraints.
4. `api` creates a `render-task` and pushes it into Redis.
5. `worker` consumes the task and calls `ai-service`.
6. `ai-service` assembles the MiniMax prompt and sends an image generation request.
7. `ai-service` downloads generated images and stores them in object storage.
8. `api` saves results and updates the task status.
9. `user-web` polls task state and displays the final gallery.

### B. Build lightweight 3D preview

1. When render generation succeeds, `scene:build` is enqueued.
2. The worker builds a lightweight room scene JSON from room metadata and style preset.
3. Scene JSON stores room size estimate, wall and floor materials, camera positions, and furniture placeholders.
4. `user-web` loads the scene JSON and renders it with Three.js.

### C. Share with client

1. User clicks share from the project page.
2. `api` creates a share record and share code.
3. A share page reads original image, selected renderings, style notes, and 3D preview entry.
4. Optional share cover image is generated asynchronously.

## 7. MiniMax integration strategy

MiniMax should be accessed only from the backend.

Do not call MiniMax directly from the browser because API keys, quotas, retries, and cost control must stay server-side.

Recommended model usage:

- text model: summarize room intent, expand style prompt, generate style explanation copy
- image model: generate design renderings from room photo and style settings

Recommended integration rules:

- keep a provider abstraction layer so MiniMax is the active provider, not a hard-coded dependency
- store every request payload and response summary for debugging and cost auditing
- immediately persist generated image URLs to object storage because provider URLs can expire
- generate multiple candidates and filter before exposing results to users

## 8. MiniMax configuration model

Admin-configurable provider fields:

- `provider_code`
- `provider_name`
- `base_url`
- `api_key`
- `enabled`
- `timeout_ms`
- `retry_limit`
- `daily_budget_limit`
- `webhook_secret`

Admin-configurable model fields:

- `model_code`
- `model_type` (`text` or `image`)
- `display_name`
- `enabled`
- `is_default`
- `temperature`
- `top_p`
- `image_size`
- `aspect_ratio`
- `candidate_count`
- `response_format`
- `prompt_optimizer_enabled`

Admin-configurable style fields:

- `style_code`
- `style_name`
- `cover_image`
- `room_types`
- `prompt_template`
- `negative_prompt_template`
- `material_keywords`
- `lighting_keywords`
- `furniture_keywords`
- `color_palette`
- `sort_order`
- `enabled`

## 9. Suggested database tables

Core business tables:

- `users`
- `admin_users`
- `projects`
- `project_rooms`
- `project_assets`
- `project_styles`
- `render_tasks`
- `render_results`
- `scene_3d_versions`
- `share_links`
- `share_snapshots`

AI and operations tables:

- `ai_providers`
- `ai_models`
- `prompt_templates`
- `style_presets`
- `task_logs`
- `cost_records`
- `audit_logs`

## 10. First-phase API list

User-facing APIs:

- `POST /v1/uploads/policy`
- `POST /v1/projects`
- `GET /v1/projects/:id`
- `POST /v1/projects/:id/render`
- `GET /v1/render-tasks/:taskId`
- `GET /v1/projects/:id/results`
- `GET /v1/projects/:id/scene-3d`
- `POST /v1/projects/:id/share`
- `GET /v1/shares/:shareCode`

Admin-facing APIs:

- `POST /v1/admin/auth/login`
- `GET /v1/admin/dashboard`
- `GET /v1/admin/projects`
- `GET /v1/admin/tasks`
- `POST /v1/admin/tasks/:id/retry`
- `GET /v1/admin/ai/providers`
- `POST /v1/admin/ai/providers`
- `GET /v1/admin/ai/models`
- `POST /v1/admin/ai/models`
- `GET /v1/admin/styles`
- `POST /v1/admin/styles`
- `GET /v1/admin/prompt-templates`
- `POST /v1/admin/prompt-templates`

## 11. MVP delivery order

Recommended implementation order:

1. Build `api`, `user-web`, and the upload/project/task skeleton.
2. Wire MiniMax generation through `ai-service`.
3. Return 2-4 rendering results and make them shareable.
4. Add lightweight 3D preview.
5. Build the admin console for model configuration, prompts, and operations.

This order gives you the fastest path to a demo while keeping the architecture ready for later expansion.
