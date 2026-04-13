<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProjects, type Project } from '../lib/api'

const projects = ref<Project[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    projects.value = await getProjects()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="admin-card table-card">
    <h3>项目列表</h3>
    <el-table v-loading="loading" :data="projects" stripe>
      <el-table-column label="项目 ID" prop="id" min-width="210" />
      <el-table-column label="名称" prop="name" min-width="160" />
      <el-table-column label="房间" prop="roomType" min-width="120" />
      <el-table-column label="风格" prop="styleCode" min-width="120" />
      <el-table-column label="预算" prop="budgetLevel" min-width="120" />
      <el-table-column label="状态" prop="status" min-width="120" />
      <el-table-column label="创建时间" prop="createdAt" min-width="180" />
    </el-table>
  </section>
</template>
