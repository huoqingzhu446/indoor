<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  createShare,
  getProject,
  getProjectResults,
  getRenderTask,
  type Project,
  type RenderResult,
  type RenderTask,
  type ShareLink,
} from '../lib/api'

const route = useRoute()
const project = ref<Project | null>(null)
const task = ref<RenderTask | null>(null)
const results = ref<RenderResult[]>([])
const share = ref<ShareLink | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const copyMessage = ref('')
let pollingTimer: number | null = null

const taskId = computed(() => String(route.query.taskId ?? ''))
const shareHref = computed(() => {
  if (!share.value) {
    return ''
  }

  if (share.value.shareCode) {
    return `${window.location.origin}/share/${share.value.shareCode}`
  }

  if (/^https?:\/\//.test(share.value.shareUrl)) {
    return share.value.shareUrl
  }

  return `${window.location.origin}${share.value.shareUrl.startsWith('/') ? '' : '/'}${share.value.shareUrl}`
})

async function loadData() {
  loading.value = true
  errorMessage.value = ''

  try {
    project.value = await getProject(String(route.params.id))
    results.value = await getProjectResults(String(route.params.id))

    if (taskId.value) {
      task.value = await getRenderTask(taskId.value)
      if (task.value.status !== 'completed' && task.value.status !== 'failed') {
        startPolling()
      } else {
        stopPolling()
      }
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '加载效果图失败'
  } finally {
    loading.value = false
  }
}

function startPolling() {
  if (pollingTimer !== null || !taskId.value) {
    return
  }

  pollingTimer = window.setInterval(async () => {
    try {
      task.value = await getRenderTask(taskId.value)

      if (task.value.status === 'completed' || task.value.status === 'failed') {
        results.value = await getProjectResults(String(route.params.id))
        stopPolling()
      }
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '轮询任务状态失败'
      stopPolling()
    }
  }, 3000)
}

function stopPolling() {
  if (pollingTimer !== null) {
    window.clearInterval(pollingTimer)
    pollingTimer = null
  }
}

async function shareProject() {
  if (!project.value) {
    return
  }

  share.value = await createShare(project.value.id, {
    title: `${project.value.name} · 分享页`,
    description: `已生成 ${results.value.length} 张候选效果图`,
  })
}

async function copyShareLink() {
  if (!shareHref.value) {
    return
  }

  try {
    await navigator.clipboard.writeText(shareHref.value)
    copyMessage.value = '链接已复制'
  } catch {
    copyMessage.value = '复制失败，请手动长按链接'
  }

  window.setTimeout(() => {
    copyMessage.value = ''
  }, 2000)
}

onMounted(loadData)
onBeforeUnmount(stopPolling)
</script>

<template>
  <section v-if="loading" class="card">
    <p class="section-copy">效果图生成任务正在同步结果...</p>
  </section>

  <template v-else-if="project">
    <section class="grid-2">
      <article class="card">
        <span class="status-tag">
          {{ task?.status ?? 'completed' }} · {{ task?.progressPercent ?? 100 }}%
        </span>
        <h2 class="section-title" style="margin-top: 14px">
          {{ project.name }} · {{ project.styleCode }} 方案
        </h2>
        <p class="section-copy">
          当前返回的是接口里筛选后的候选结果。正式接入 MiniMax 后，可以在这里加入多轮采样与打分机制。
        </p>
        <p v-if="task?.status !== 'completed'" class="section-copy" style="margin-top: 12px">
          任务正在队列中处理，页面会自动刷新状态。
        </p>
        <div class="inline-actions">
          <button class="primary-button" type="button" @click="shareProject">生成分享页</button>
          <RouterLink
            class="secondary-button"
            :class="{ 'disabled-link': !project.previewReady }"
            :to="project.previewReady ? `/project/${project.id}/preview-360` : `/project/${project.id}`"
          >
            查看 360 预览
          </RouterLink>
          <RouterLink
            class="secondary-button"
            :class="{ 'disabled-link': !project.previewReady }"
            :to="project.previewReady ? `/project/${project.id}/preview-3d` : `/project/${project.id}`"
          >
            查看 3D 预览
          </RouterLink>
        </div>
        <p v-if="!project.previewReady" class="section-copy" style="margin-top: 12px">
          当前已上传 {{ project.uploadedModuleCount }}/{{ project.requiredModuleCount }} 个模块，补齐后开放 360 与 3D 预览。
        </p>
        <div v-if="share" class="card" style="margin-top: 14px; padding: 16px">
          <p class="field-label">分享链接</p>
          <a
            class="share-link-text"
            :href="shareHref"
            target="_blank"
            rel="noreferrer"
          >
            {{ shareHref }}
          </a>
          <div class="inline-actions" style="margin-top: 12px">
            <button class="secondary-button" type="button" @click="copyShareLink">复制链接</button>
            <a class="secondary-button" :href="shareHref" target="_blank" rel="noreferrer">
              打开分享页
            </a>
          </div>
          <p v-if="copyMessage" class="copy-feedback">{{ copyMessage }}</p>
        </div>
      </article>

      <article class="card">
        <h3 class="section-title">任务参数</h3>
        <div class="pill-row">
          <span class="pill">风格：{{ project.styleCode }}</span>
          <span class="pill">预算：{{ project.budgetLevel }}</span>
          <span class="pill">结果数：{{ results.length }}</span>
        </div>
      </article>
    </section>

    <section class="results-grid">
      <article v-for="item in results" :key="item.id" class="result-card">
        <img class="result-image" :src="item.imageUrl" :alt="item.title" />
        <div class="result-meta">
          <div>
            <h3 class="style-name">{{ item.title }}</h3>
            <p class="style-desc">{{ item.styleCode }}</p>
          </div>
          <span class="status-tag">Score {{ item.score }}</span>
        </div>
      </article>
    </section>
  </template>

  <section v-else class="card">
    <p class="section-copy">{{ errorMessage || '暂无结果' }}</p>
  </section>
</template>
