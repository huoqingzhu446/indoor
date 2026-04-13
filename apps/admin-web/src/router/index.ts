import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProvidersView from '../views/ProvidersView.vue'
import SharesView from '../views/SharesView.vue'
import TasksView from '../views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: '运营概览' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { title: '项目列表' },
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
      meta: { title: '渲染任务' },
    },
    {
      path: '/shares',
      name: 'shares',
      component: SharesView,
      meta: { title: '分享管理' },
    },
    {
      path: '/providers',
      name: 'providers',
      component: ProvidersView,
      meta: { title: 'MiniMax 配置' },
    },
  ],
})

export default router
