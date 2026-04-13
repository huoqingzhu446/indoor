<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useAdminShellStore } from './stores/admin-shell'

const route = useRoute()
const shell = useAdminShellStore()
const title = computed(() => String(route.meta.title ?? 'Room AI Admin'))
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-sidebar">
      <div>
        <p class="admin-eyebrow">Room AI</p>
        <h1 class="admin-brand">运营后台</h1>
      </div>

      <nav class="admin-nav">
        <RouterLink
          v-for="item in shell.navigation"
          :key="item.to"
          class="admin-nav-link"
          :class="{ active: route.path === item.to }"
          :to="item.to"
        >
          <span>{{ item.label }}</span>
          <small>{{ item.caption }}</small>
        </RouterLink>
      </nav>
    </aside>

    <div class="admin-main">
      <header class="admin-header">
        <div>
          <p class="admin-header-note">H5 用户端 + Nest API + FastAPI AI Service</p>
          <h2 class="admin-page-title">{{ title }}</h2>
        </div>
        <RouterLink class="admin-header-link" to="/providers">MiniMax 配置</RouterLink>
      </header>

      <RouterView />
    </div>
  </div>
</template>
