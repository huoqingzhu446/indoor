<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useStyleCatalogStore } from '../stores/style-catalog'

const styleStore = useStyleCatalogStore()
</script>

<template>
  <section class="hero-panel">
    <div class="hero-copy">
      <span class="status-tag">移动端优先 · 分享驱动 · AI 受控生成</span>
      <h2>拍一张毛坯房照片，几分钟内生成可分享的设计方案。</h2>
      <p>
        第一阶段先聚焦在最能验证价值的链路：上传原图、选择风格、生成效果图、给出轻量 3D
        预览，再把项目页分享给客户。
      </p>
      <div class="hero-actions">
        <RouterLink class="primary-button" to="/upload">立即创建项目</RouterLink>
        <a class="secondary-button" href="#styles">先看风格方案</a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="floor-note">
        <span>Lightweight 3D Preview</span>
        <span>MiniMax Render Pipeline</span>
      </div>
    </div>
  </section>

  <section class="grid-3">
    <article class="metric-card">
      <p class="stat-number">1</p>
      <p class="stat-label">上传单张原始照片，先保证结构不乱。</p>
    </article>
    <article class="metric-card">
      <p class="stat-number">2-4</p>
      <p class="stat-label">自动生成多张风格候选，再筛出更稳的结果。</p>
    </article>
    <article class="metric-card">
      <p class="stat-number">1 link</p>
      <p class="stat-label">生成完整项目分享页，而不是只发一张图片。</p>
    </article>
  </section>

  <section id="styles" class="card">
    <h3 class="section-title">首期风格目录</h3>
    <p class="section-copy">
      用户端先提供固定风格模板，既能控制生成质量，也方便后台做 prompt 和模型配置。
    </p>
    <div class="style-grid" style="margin-top: 18px">
      <article
        v-for="preset in styleStore.presets"
        :key="preset.code"
        class="style-option"
      >
        <h4 class="style-name">{{ preset.name }}</h4>
        <p class="style-desc">{{ preset.description }}</p>
        <div class="swatches">
          <span
            v-for="color in preset.colors"
            :key="color"
            class="swatch"
            :style="{ background: color }"
          />
        </div>
      </article>
    </div>
  </section>

  <section class="grid-2">
    <article class="card">
      <h3 class="section-title">用户操作链路</h3>
      <div class="three-stage">
        <div class="pill">1. 上传照片和房间类型</div>
        <div class="pill">2. 选择风格、预算和约束</div>
        <div class="pill">3. 查看效果图、3D 预览和分享页</div>
      </div>
    </article>
    <article class="card">
      <h3 class="section-title">当前开发重点</h3>
      <p class="section-copy">
        前端已按 H5 用户端和后台端分离，后端核心接口先围绕项目、上传、渲染任务、分享四块打通。
      </p>
      <div class="inline-actions">
        <RouterLink class="primary-button" to="/upload">去上传页</RouterLink>
      </div>
    </article>
  </section>
</template>
