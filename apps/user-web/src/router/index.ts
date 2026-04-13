import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Preview360View from '../views/Preview360View.vue'
import Preview3dView from '../views/Preview3dView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ProjectResultsView from '../views/ProjectResultsView.vue'
import ShareView from '../views/ShareView.vue'
import UploadView from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '装修灵感预览' },
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView,
      meta: { title: '上传毛坯房照片' },
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetailView,
      meta: { title: '项目详情', showTabbar: false },
    },
    {
      path: '/project/:id/results',
      name: 'project-results',
      component: ProjectResultsView,
      meta: { title: '效果图结果', showTabbar: false },
    },
    {
      path: '/project/:id/preview-360',
      name: 'project-preview-360',
      component: Preview360View,
      meta: { title: '360 预览', showTabbar: false },
    },
    {
      path: '/project/:id/preview-3d',
      name: 'project-preview-3d',
      component: Preview3dView,
      meta: { title: '3D 预览', showTabbar: false },
    },
    {
      path: '/share/:shareCode',
      name: 'share',
      component: ShareView,
      meta: { title: '项目分享', showTabbar: false },
    },
  ],
})

export default router
