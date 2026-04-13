from typing import Optional

from fastapi import FastAPI, Header, HTTPException

from .config import settings
from .minimax_client import MiniMaxClient
from .schemas import (
    MiniMaxCallbackPayload,
    RenderJobExecuteRequest,
    RenderJobExecuteResponse,
    RenderJobPrepareRequest,
    RenderJobPrepareResponse,
)

app = FastAPI(
    title="Room AI AI Service",
    version="0.1.0",
    description="MiniMax orchestration service for prompt building, render execution, and callbacks.",
)


@app.get("/health")
def health():
    return {
        "service": "ai-service",
        "status": "ok",
        "provider": "minimax",
        "text_model": settings.minimax_text_model,
        "image_model": settings.minimax_image_model,
        "mock_mode": settings.minimax_mock_mode,
        "has_real_key": settings.minimax_has_real_key,
    }


@app.get("/v1/models/active")
def active_models():
    return {
        "provider": "minimax",
        "api_base": settings.minimax_api_base,
        "text_model": settings.minimax_text_model,
        "image_model": settings.minimax_image_model,
        "mock_mode": settings.minimax_mock_mode,
        "has_real_key": settings.minimax_has_real_key,
    }


@app.post("/v1/render-jobs/prepare", response_model=RenderJobPrepareResponse)
def prepare_render_job(payload: RenderJobPrepareRequest):
    prompt_preview = (
        f"将{payload.room_type}设计为{payload.style_code}风格，"
        f"预算偏好为{payload.budget_level}，"
        f"并保留这些结构约束：{', '.join(payload.constraints) or '无'}。"
    )

    return RenderJobPrepareResponse(
        provider="minimax",
        text_model=settings.minimax_text_model,
        image_model=settings.minimax_image_model,
        prompt_preview=prompt_preview,
        callback_url=f"{settings.app_base_url}/api/internal/minimax/callback",
    )


@app.post("/v1/render-jobs/execute", response_model=RenderJobExecuteResponse)
def execute_render_job(payload: RenderJobExecuteRequest):
    client = MiniMaxClient()

    try:
        result = client.generate_images(payload)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=str(exc)) from exc
    finally:
        client.close()

    return RenderJobExecuteResponse(
        job_id=result.task_id,
        provider=result.provider,
        image_model=result.image_model,
        text_model=result.text_model,
        prompt_preview=result.prompt_preview,
        status="completed",
        candidates=result.candidates,
    )


@app.post("/v1/callbacks/minimax")
def receive_minimax_callback(
    payload: MiniMaxCallbackPayload,
    x_callback_secret: Optional[str] = Header(default=None),
):
    if settings.minimax_callback_secret and x_callback_secret != settings.minimax_callback_secret:
        raise HTTPException(status_code=401, detail="Invalid callback secret")

    return {
        "accepted": True,
        "task_id": payload.task_id,
        "status": payload.status,
        "received_outputs": len(payload.output_urls),
    }
