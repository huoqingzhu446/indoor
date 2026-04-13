<template>
  <section class="admin-grid-2">
    <article class="admin-placeholder">
      <h3>MiniMax Provider</h3>
      <p>
        第一版建议把 MiniMax 作为默认图像供应商，但在 API 和 AI Service 中保留 provider abstraction，
        避免后续切换模型时牵动业务层。
      </p>
      <div class="admin-pills">
        <span class="admin-pill">MINIMAX_API_BASE</span>
        <span class="admin-pill">MINIMAX_API_KEY</span>
        <span class="admin-pill">MINIMAX_TEXT_MODEL</span>
        <span class="admin-pill">MINIMAX_IMAGE_MODEL</span>
      </div>
    </article>

    <article class="admin-placeholder">
      <h3>运营配置建议</h3>
      <p>
        后台下一步适合增加模型启停、Prompt 模板、风格模板、成本上限、重试策略和每日任务统计。
      </p>
      <div class="admin-pills">
        <span class="admin-pill">风格模板</span>
        <span class="admin-pill">提示词模板</span>
        <span class="admin-pill">候选结果数</span>
        <span class="admin-pill">失败重试</span>
      </div>
    </article>
  </section>
</template>
