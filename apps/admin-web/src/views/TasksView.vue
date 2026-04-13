<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getRenderTasks, type RenderTask } from '../lib/api'

const tasks = ref<RenderTask[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    tasks.value = await getRenderTasks()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="admin-card table-card">
    <h3>渲染任务</h3>
    <el-table v-loading="loading" :data="tasks" stripe>
      <el-table-column label="任务 ID" prop="id" min-width="210" />
      <el-table-column label="项目 ID" prop="projectId" min-width="210" />
      <el-table-column label="风格" prop="styleCode" min-width="120" />
      <el-table-column label="预算" prop="budgetLevel" min-width="120" />
      <el-table-column label="状态" prop="status" min-width="120" />
      <el-table-column label="进度" prop="progressPercent" min-width="120" />
      <el-table-column label="创建时间" prop="createdAt" min-width="180" />
    </el-table>
  </section>
</template>
