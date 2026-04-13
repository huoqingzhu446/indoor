import { defineStore } from 'pinia'

export interface StylePreset {
  code: string
  name: string
  description: string
  colors: string[]
  mood: string
}

export const useStyleCatalogStore = defineStore('style-catalog', {
  state: () => ({
    roomTypes: ['客厅', '卧室', '餐厅', '书房'],
    budgetLevels: ['低', '中', '高'],
    presets: [
      {
        code: 'cream',
        name: '奶油风',
        description: '柔和米白、暖调灯光、圆角软装，适合灵感展示和家庭客群。',
        colors: ['#f6efe7', '#d8c0a7', '#b98561'],
        mood: '温暖、通透、适合分享页',
      },
      {
        code: 'modern',
        name: '现代风',
        description: '线条更克制，材质偏石材和低饱和度木色，适合通用场景。',
        colors: ['#f1eee8', '#a08d7b', '#53514d'],
        mood: '克制、干净、稳重',
      },
      {
        code: 'wood',
        name: '原木风',
        description: '强调木质肌理与自然采光，适合强调居住感和放松感。',
        colors: ['#f2eadf', '#d7b384', '#8e6e4a'],
        mood: '自然、松弛、生活感',
      },
      {
        code: 'nordic',
        name: '北欧风',
        description: '明亮、清爽、轻量感强，适合作为低预算高颜值方案。',
        colors: ['#fbfaf5', '#cfd7d6', '#74827f'],
        mood: '明亮、理性、轻盈',
      },
    ] as StylePreset[],
  }),
  getters: {
    defaultPreset: (state) => state.presets[0],
  },
})
