from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


def discover_env_files() -> tuple[str, ...]:
    current = Path(__file__).resolve()
    env_files: list[str] = []

    # In local development we want to pick up the repo-root `.env`.
    # In containers there may be no file at all, so we should fall back to
    # process environment variables instead of crashing on a fixed parent depth.
    for parent in current.parents:
        candidate = parent / ".env"
        if candidate.exists():
            env_files.append(str(candidate))
            break

    env_files.append(".env")
    return tuple(dict.fromkeys(env_files))


class Settings(BaseSettings):
    minimax_api_base: str = "https://api.minimaxi.com/v1"
    minimax_api_key: str = ""
    minimax_text_model: str = "MiniMax-M2.7"
    minimax_image_model: str = "image-01-live"
    minimax_callback_secret: str = ""
    minimax_mock_mode: bool = False
    minimax_use_image_reference: bool = False
    minimax_timeout_seconds: float = 60.0
    app_base_url: str = "http://localhost:3000"

    model_config = SettingsConfigDict(
        env_file=discover_env_files(),
        extra="ignore",
    )

    @property
    def minimax_has_real_key(self) -> bool:
        key = (self.minimax_api_key or "").strip()
        if not key:
            return False
        if key.startswith("replace_with_"):
            return False
        return True


settings = Settings()
