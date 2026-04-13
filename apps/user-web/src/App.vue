<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { label: '首页', to: '/' },
  { label: '创建', to: '/upload' },
]

const title = computed(() => String(route.meta.title ?? 'Room AI'))
const showTabbar = computed(() => route.meta.showTabbar !== false)
</script>

<template>
  <div class="shell">
    <header class="shell-header">
      <div>
        <p class="eyebrow">Room AI Studio</p>
        <h1 class="shell-title">{{ title }}</h1>
      </div>
      <RouterLink class="primary-link" to="/upload">新建项目</RouterLink>
    </header>

    <main class="shell-main">
      <RouterView />
    </main>

    <nav v-if="showTabbar" class="shell-tabbar">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        class="tab-link"
        :class="{ active: route.path === item.to }"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </div>
</template>
