<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProjects, getRenderTasks, getShareLinks, type Project, type RenderTask, type ShareLink } from '../lib/api'

const projects = ref<Project[]>([])
const tasks = ref<RenderTask[]>([])
const shares = ref<ShareLink[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const [projectData, taskData, shareData] = await Promise.all([
      getProjects(),
      getRenderTasks(),
      getShareLinks(),
    ])

    projects.value = projectData
    tasks.value = taskData
    shares.value = shareData
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="admin-grid-4">
    <article class="admin-card">
      <p class="admin-stat">{{ projects.length }}</p>
      <p>项目总数</p>
    </article>
    <article class="admin-card">
      <p class="admin-stat">{{ tasks.length }}</p>
      <p>渲染任务</p>
    </article>
    <article class="admin-card">
      <p class="admin-stat">{{ shares.length }}</p>
      <p>分享链接</p>
    </article>
    <article class="admin-card">
      <p class="admin-stat">{{ tasks.filter((item) => item.status === 'completed').length }}</p>
      <p>已完成任务</p>
    </article>
  </section>

  <section class="admin-grid-2" style="margin-top: 16px">
    <article class="admin-card">
      <h3>当前后端主链路</h3>
      <div class="admin-pills">
        <span class="admin-pill">uploads</span>
        <span class="admin-pill">projects</span>
        <span class="admin-pill">render-tasks</span>
        <span class="admin-pill">shares</span>
      </div>
    </article>
    <article class="admin-card">
      <h3>当前接入策略</h3>
      <p>
        生成模型先走 MiniMax，项目、上传、渲染任务和分享链路由 Nest API 编排；AI 服务与数据库结构继续独立扩展。
      </p>
    </article>
  </section>

  <section class="admin-card table-card" style="margin-top: 16px">
    <h3>最近任务</h3>
    <el-table v-loading="loading" :data="tasks.slice(0, 5)" stripe>
      <el-table-column label="任务 ID" prop="id" min-width="210" />
      <el-table-column label="项目 ID" prop="projectId" min-width="210" />
      <el-table-column label="风格" prop="styleCode" min-width="120" />
      <el-table-column label="状态" prop="status" min-width="120" />
      <el-table-column label="进度" prop="progressPercent" min-width="120" />
    </el-table>
  </section>
</template>
