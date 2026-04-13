from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_ENV_FILE = Path(__file__).resolve().parents[3] / ".env"


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
        env_file=(str(ROOT_ENV_FILE), ".env"),
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
