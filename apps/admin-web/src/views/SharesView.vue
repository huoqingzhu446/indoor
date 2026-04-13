<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getShareLinks, type ShareLink } from '../lib/api'

const shares = ref<ShareLink[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    shares.value = await getShareLinks()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="admin-card table-card">
    <h3>分享链接</h3>
    <el-table v-loading="loading" :data="shares" stripe>
      <el-table-column label="分享 ID" prop="id" min-width="200" />
      <el-table-column label="项目 ID" prop="projectId" min-width="210" />
      <el-table-column label="分享码" prop="shareCode" min-width="140" />
      <el-table-column label="链接" prop="shareUrl" min-width="280" />
      <el-table-column label="状态" prop="status" min-width="120" />
      <el-table-column label="创建时间" prop="createdAt" min-width="180" />
    </el-table>
  </section>
</template>
