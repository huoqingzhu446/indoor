from __future__ import annotations

from dataclasses import dataclass
from typing import Any

import httpx

from .config import settings
from .schemas import RenderCandidate, RenderJobExecuteRequest


@dataclass
class PreparedPrompt:
    prompt: str
    text_model: str


@dataclass
class GeneratedImages:
    provider: str
    image_model: str
    text_model: str
    prompt_preview: str
    task_id: str
    candidates: list[RenderCandidate]


class MiniMaxClient:
    def __init__(self) -> None:
        self._client = httpx.Client(timeout=settings.minimax_timeout_seconds)

    def prepare_prompt(self, payload: RenderJobExecuteRequest) -> PreparedPrompt:
        if settings.minimax_mock_mode:
            return PreparedPrompt(
                prompt=self._build_fallback_prompt(payload),
                text_model=settings.minimax_text_model,
            )

        self._ensure_real_mode_ready()

        response = self._client.post(
            f"{settings.minimax_api_base.rstrip('/')}/chat/completions",
            headers=self._build_headers(),
            json={
                "model": settings.minimax_text_model,
                "messages": [
                    {
                        "role": "system",
                        "content": (
                            "你是一个室内设计提示词编排助手。"
                            "你的任务是把用户提供的房间类型、风格、预算和结构约束，"
                            "整理成适合图像生成模型使用的高质量中文提示词。"
                            "必须强调保留原始空间结构、门窗位置和透视关系。"
                            "不要输出解释文字，只输出最终提示词。"
                        ),
                    },
                    {
                        "role": "user",
                        "content": self._build_prompt_request(payload),
                    },
                ],
                "temperature": 0.3,
            },
        )
        response.raise_for_status()
        data = response.json()
        content = (
            data.get("choices", [{}])[0]
            .get("message", {})
            .get("content", "")
            .strip()
        )

        if not content:
            content = self._build_fallback_prompt(payload)

        return PreparedPrompt(
            prompt=self._strip_think_tags(content),
            text_model=settings.minimax_text_model,
        )

    def generate_images(self, payload: RenderJobExecuteRequest) -> GeneratedImages:
        prompt = self.prepare_prompt(payload)

        if settings.minimax_mock_mode:
            return GeneratedImages(
                provider="minimax",
                image_model=settings.minimax_image_model,
                text_model=prompt.text_model,
                prompt_preview=prompt.prompt,
                task_id=f"mock-{payload.project_id}",
                candidates=[
                    RenderCandidate(
                        title=f"{payload.room_type} 方案 {index}",
                        image_url=(
                            "https://placehold.co/960x1200/f2e7d8/6b543e/png"
                            f"?text={payload.style_code}-candidate-{index}"
                        ),
                        score=93 - (index - 1) * 2,
                    )
                    for index in range(1, payload.candidate_count + 1)
                ],
            )

        self._ensure_real_mode_ready()

        request_body: dict[str, Any] = {
            "model": settings.minimax_image_model,
            "prompt": prompt.prompt,
            "aspect_ratio": "3:4",
            "response_format": "url",
            "n": payload.candidate_count,
            "prompt_optimizer": False,
            "aigc_watermark": False,
        }

        # According to the provided MiniMax image-to-image doc, subject_reference currently only supports
        # `character` portraits. Our room-photo scenario should not send a room image through this field.
        # Keep the flag reserved for future portrait-style workflows, but do not attach room photos here.

        response = self._client.post(
            f"{settings.minimax_api_base.rstrip('/')}/image_generation",
            headers=self._build_headers(),
            json=request_body,
        )
        response.raise_for_status()
        data = response.json()

        base_resp = data.get("base_resp", {})
        if base_resp.get("status_code") not in (None, 0):
            raise RuntimeError(base_resp.get("status_msg", "MiniMax image generation failed"))

        image_urls = data.get("data", {}).get("image_urls", [])
        candidates = [
            RenderCandidate(
                title=f"{payload.room_type} 方案 {index}",
                image_url=image_url,
                score=93 - (index - 1) * 2,
            )
            for index, image_url in enumerate(image_urls, start=1)
        ]

        if not candidates:
            raise RuntimeError("MiniMax image generation returned no image_urls")

        return GeneratedImages(
            provider="minimax",
            image_model=settings.minimax_image_model,
            text_model=prompt.text_model,
            prompt_preview=prompt.prompt,
            task_id=data.get("id", f"minimax-{payload.project_id}"),
            candidates=candidates,
        )

    def close(self) -> None:
        self._client.close()

    def _build_headers(self) -> dict[str, str]:
        return {
            "Authorization": f"Bearer {settings.minimax_api_key}",
            "Content-Type": "application/json",
        }

    def _ensure_real_mode_ready(self) -> None:
        if not settings.minimax_has_real_key:
            raise RuntimeError(
                "MiniMax real mode is enabled, but MINIMAX_API_KEY is missing or still using a placeholder value."
            )

    def _build_prompt_request(self, payload: RenderJobExecuteRequest) -> str:
        constraints = "、".join(payload.constraints) if payload.constraints else "保留原始结构"
        return (
            f"房间类型：{payload.room_type}\n"
            f"风格：{payload.style_code}\n"
            f"预算：{payload.budget_level}\n"
            f"约束：{constraints}\n"
            "请输出一段适合室内装修效果图生成的中文提示词，"
            "强调空间真实、结构保真、材质和灯光明确，"
            "不要改变原始房型和门窗位置。"
        )

    def _build_fallback_prompt(self, payload: RenderJobExecuteRequest) -> str:
        constraints = "、".join(payload.constraints) if payload.constraints else "保留原始空间结构"
        return (
            f"将这张{payload.room_type}毛坯房照片设计为{payload.style_code}风格，"
            f"预算偏好为{payload.budget_level}，"
            f"要求{constraints}，"
            "保持真实透视关系与门窗位置，墙地顶材质明确，"
            "空间明亮自然，适合给客户展示装修灵感。"
        )

    def _strip_think_tags(self, content: str) -> str:
        while "<think>" in content and "</think>" in content:
            start = content.index("<think>")
            end = content.index("</think>") + len("</think>")
            content = f"{content[:start]}{content[end:]}"

        return content.strip()
