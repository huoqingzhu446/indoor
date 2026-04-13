from typing import Optional

from pydantic import BaseModel, Field, HttpUrl


class RenderJobPrepareRequest(BaseModel):
    project_id: str = Field(..., description="Project identifier from the business API")
    room_type: str
    style_code: str
    budget_level: str
    constraints: list[str] = Field(default_factory=list)


class RenderJobPrepareResponse(BaseModel):
    provider: str
    text_model: str
    image_model: str
    prompt_preview: str
    callback_url: str


class RenderJobExecuteRequest(BaseModel):
    project_id: str
    source_image_url: HttpUrl
    room_type: str
    style_code: str
    budget_level: str
    constraints: list[str] = Field(default_factory=list)
    candidate_count: int = Field(default=4, ge=1, le=6)


class RenderCandidate(BaseModel):
    title: str
    image_url: str
    score: float


class RenderJobExecuteResponse(BaseModel):
    job_id: str
    provider: str
    image_model: str
    text_model: Optional[str] = None
    prompt_preview: Optional[str] = None
    status: str
    candidates: list[RenderCandidate]


class MiniMaxCallbackPayload(BaseModel):
    task_id: str
    status: str
    output_urls: list[HttpUrl] = Field(default_factory=list)
