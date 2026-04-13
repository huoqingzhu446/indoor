<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getShare, type ShareSnapshot } from '../lib/api'

const route = useRoute()
const snapshot = ref<ShareSnapshot | null>(null)
const loading = ref(true)
const errorMessage = ref('')

async function loadShare() {
  loading.value = true
  errorMessage.value = ''

  try {
    snapshot.value = await getShare(String(route.params.shareCode))
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '分享页加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(loadShare)
</script>

<template>
  <section v-if="loading" class="card">
    <p class="section-copy">正在加载分享内容...</p>
  </section>

  <template v-else-if="snapshot">
    <section class="hero-panel">
      <div class="hero-copy">
        <span class="status-tag">Public Share</span>
        <h2>{{ snapshot.share.title }}</h2>
        <p>{{ snapshot.share.description }}</p>
        <div class="pill-row" style="margin-top: 18px">
          <span class="pill">项目：{{ snapshot.project.name }}</span>
          <span class="pill">风格：{{ snapshot.project.styleCode }}</span>
          <span class="pill">预算：{{ snapshot.project.budgetLevel }}</span>
        </div>
        <div class="hero-actions">
          <RouterLink
            class="primary-button"
            :to="`/project/${snapshot.project.id}/preview-3d`"
          >
            查看 3D 预览
          </RouterLink>
        </div>
      </div>

      <div class="hero-visual">
        <div class="floor-note">
          <span>Share Code</span>
          <span>{{ snapshot.share.shareCode }}</span>
        </div>
      </div>
    </section>

    <section class="results-grid">
      <article v-for="item in snapshot.results" :key="item.id" class="result-card">
        <img class="result-image" :src="item.imageUrl" :alt="item.title" />
        <div class="result-meta">
          <div>
            <h3 class="style-name">{{ item.title }}</h3>
            <p class="style-desc">结构保真优先 · {{ item.styleCode }}</p>
          </div>
          <span class="status-tag">Score {{ item.score }}</span>
        </div>
      </article>
    </section>
  </template>

  <section v-else class="card">
    <p class="section-copy">{{ errorMessage || '分享内容不存在或已失效' }}</p>
  </section>
</template>
