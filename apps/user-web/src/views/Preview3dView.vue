<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProject, type Project } from '../lib/api'
import ThreeRoomPreview from '../components/ThreeRoomPreview.vue'
import { RouterLink, useRoute } from 'vue-router'

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
    errorMessage.value = error instanceof Error ? error.message : '加载 3D 数据失败'
  } finally {
    loading.value = false
  }
}

onMounted(loadProject)
</script>

<template>
  <section v-if="loading" class="card">
    <p class="section-copy">正在准备轻量 3D 预览...</p>
  </section>

  <template v-else-if="project">
    <section v-if="!project.previewReady" class="card">
      <h2 class="section-title">3D 预览暂未开放</h2>
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
        <h2 class="section-title">{{ project.name }} · 轻量 3D 预览</h2>
        <p class="section-copy">
          这一版先用参数化房间和基础家具体块表达空间感，后续再把 scene schema 和真实资产库接进来。
        </p>
        <div style="margin-top: 18px">
          <ThreeRoomPreview :style-code="project.styleCode" />
        </div>
      </section>

      <section class="grid-2">
        <article class="card">
          <h3 class="section-title">预览说明</h3>
          <div class="three-stage">
            <div class="pill">墙地材质由当前风格模板驱动</div>
            <div class="pill">家具体块用于表达空间关系</div>
            <div class="pill">正式版本会由 room scene schema 统一生成</div>
          </div>
        </article>
        <article class="card">
          <h3 class="section-title">当前配置</h3>
          <div class="pill-row">
            <span class="pill">风格：{{ project.styleCode }}</span>
            <span class="pill">房间：{{ project.roomType }}</span>
            <span class="pill">预算：{{ project.budgetLevel }}</span>
          </div>
        </article>
      </section>
    </template>
  </template>

  <section v-else class="card">
    <p class="section-copy">{{ errorMessage || '找不到对应项目' }}</p>
  </section>
</template>
