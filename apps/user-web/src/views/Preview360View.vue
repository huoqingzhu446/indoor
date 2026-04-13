<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import PanoramaPreview from '../components/PanoramaPreview.vue'
import { getProject, type Project } from '../lib/api'

const route = useRoute()
const project = ref<Project | null>(null)
const loading = ref(true)
const errorMessage = ref('')

async function loadProject() {
  loading.value = true
  errorMessage.value = ''

  try {
    project.value = await getProject(String(route.params.id))
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '加载 360 预览失败'
  } finally {
    loading.value = false
  }
}

onMounted(loadProject)
</script>

<template>
  <section v-if="loading" class="card">
    <p class="section-copy">正在准备 360 预览...</p>
  </section>

  <template v-else-if="project">
    <section v-if="!project.previewReady" class="card">
      <h2 class="section-title">360 预览暂未开放</h2>
      <p class="section-copy">
        当前已上传 {{ project.uploadedModuleCount }}/{{ project.requiredModuleCount }} 个模块。
        完成全部模块上传后，系统才会开放 360 预览和 3D 预览。
      </p>
      <div class="inline-actions">
        <RouterLink class="primary-button" :to="`/project/${project.id}`">去补齐模块</RouterLink>
      </div>
    </section>

    <template v-else>
      <section class="preview-card">
        <h2 class="section-title">{{ project.name }} · 360 环视预览</h2>
        <p class="section-copy">
          这是一版沉浸式 360 环视预览，支持拖动视角浏览整体空间氛围。
        </p>
        <div style="margin-top: 18px">
          <PanoramaPreview :style-code="project.styleCode" :room-type="project.roomType" />
        </div>
      </section>

      <section class="grid-2">
        <article class="card">
          <h3 class="section-title">交互说明</h3>
          <div class="three-stage">
            <div class="pill">左右拖动可旋转视角</div>
            <div class="pill">上下拖动可查看顶面与地面</div>
            <div class="pill">适合客户快速理解空间氛围</div>
          </div>
        </article>
        <article class="card">
          <h3 class="section-title">预览状态</h3>
          <div class="pill-row">
            <span class="pill">模块进度：{{ project.uploadedModuleCount }}/{{ project.requiredModuleCount }}</span>
            <span class="pill">风格：{{ project.styleCode }}</span>
            <span class="pill">房间：{{ project.roomType }}</span>
          </div>
        </article>
      </section>
    </template>
  </template>

  <section v-else class="card">
    <p class="section-copy">{{ errorMessage || '找不到对应项目' }}</p>
  </section>
</template>
