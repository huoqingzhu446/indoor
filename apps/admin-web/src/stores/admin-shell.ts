import { defineStore } from 'pinia'

export const useAdminShellStore = defineStore('admin-shell', {
  state: () => ({
    navigation: [
      { label: '概览', caption: '项目和任务指标', to: '/' },
      { label: '项目', caption: '房间与风格方案', to: '/projects' },
      { label: '任务', caption: '效果图生成状态', to: '/tasks' },
      { label: '分享', caption: '分享页和客户链接', to: '/shares' },
      { label: '模型', caption: 'MiniMax 接入配置', to: '/providers' },
    ],
  }),
})
