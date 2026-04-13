<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { createShare, getProject, type Project, type ShareLink, uploadProjectModule } from '../lib/api'

const route = useRoute()
const project = ref<Project | null>(null)
const share = ref<ShareLink | null>(null)
const loading = ref(true)
const sharing = ref(false)
const uploadingModuleCode = ref('')
const errorMessage = ref('')

const constraints = computed(() => project.value?.constraints ?? [])
const projectModules = computed(() => project.value?.modules ?? [])
const previewLocked = computed(() => !project.value?.previewReady)

async function loadProject() {
  loading.value = true
  errorMessage.value = ''

  try {
    project.value = await getProject(String(route.params.id))
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '加载项目失败'
  } finally {
    loading.value = false
  }
}

async function generateShare() {
  if (!project.value) {
    return
  }

  sharing.value = true
  try {
    share.value = await createShare(project.value.id, {
      title: `${project.value.name} · ${project.value.roomType}方案`,
      description: `风格：${project.value.styleCode}，预算：${project.value.budgetLevel}`,
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '创建分享失败'
  } finally {
    sharing.value = false
  }
}

async function onUploadModule(moduleCode: string, event: Event) {
  if (!project.value) {
    return
  }

  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) {
    return
  }

  uploadingModuleCode.value = moduleCode
  errorMessage.value = ''

  try {
    project.value = await uploadProjectModule(project.value.id, moduleCode, file)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模块上传失败'
  } finally {
    uploadingModuleCode.value = ''
    target.value = ''
  }
}

onMounted(loadProject)
</script>

<template>
  <section v-if="loading" class="card">
    <p class="section-copy">正在加载项目详情...</p>
  </section>

  <template v-else-if="project">
    <section class="grid-2">
      <article class="card">
        <span class="status-tag">{{ project.status }}</span>
        <h2 class="section-title" style="margin-top: 14px">{{ project.name }}</h2>
        <p class="section-copy">
          当前项目已经包含风格、预算和结构约束信息，后续 2D 出图、3D 预览和分享页都依赖这份项目数据。
        </p>

        <div class="meta-grid" style="margin-top: 18px">
          <div class="metric-card">
            <p class="stat-number">{{ project.roomType }}</p>
            <p class="stat-label">房间类型</p>
          </div>
          <div class="metric-card">
            <p class="stat-number">{{ project.styleCode }}</p>
            <p class="stat-label">风格代码</p>
          </div>
          <div class="metric-card">
            <p class="stat-number">{{ project.budgetLevel }}</p>
            <p class="stat-label">预算层级</p>
          </div>
        </div>

        <div class="inline-actions">
          <RouterLink class="primary-button" :to="`/project/${project.id}/results`">查看效果图</RouterLink>
          <RouterLink
            class="secondary-button"
            :class="{ 'disabled-link': previewLocked }"
            :to="previewLocked ? `/project/${project.id}` : `/project/${project.id}/preview-360`"
          >
            查看 360
          </RouterLink>
          <RouterLink
            class="secondary-button"
            :class="{ 'disabled-link': previewLocked }"
            :to="previewLocked ? `/project/${project.id}` : `/project/${project.id}/preview-3d`"
          >
            查看 3D
          </RouterLink>
        </div>
      </article>

      <article class="card">
        <h3 class="section-title">结构约束</h3>
        <div class="pill-row">
          <span v-for="item in constraints" :key="item" class="pill">{{ item }}</span>
        </div>

        <div class="inline-actions">
          <button class="primary-button" type="button" :disabled="sharing" @click="generateShare">
            {{ sharing ? '正在生成分享链接...' : '生成分享链接' }}
          </button>
        </div>

        <div v-if="share" class="card" style="margin-top: 16px; padding: 16px">
          <p class="field-label">分享链接</p>
          <p class="section-copy" style="word-break: break-all">{{ share.shareUrl }}</p>
          <RouterLink class="secondary-button" :to="`/share/${share.shareCode}`" style="margin-top: 12px">
            打开分享页
          </RouterLink>
        </div>
      </article>
    </section>

    <section class="card">
      <h3 class="section-title">预览模块上传进度</h3>
      <p class="section-copy">
        完成全部模块上传后，系统才会开放 360 预览和 3D 预览。
      </p>
      <div class="module-grid" style="margin-top: 18px">
        <article v-for="item in projectModules" :key="item.moduleCode" class="module-card">
          <div class="module-header">
            <div>
              <h4 class="style-name">{{ item.moduleName }}</h4>
              <p class="style-desc">模块编码：{{ item.moduleCode }}</p>
            </div>
            <span class="status-tag" :class="{ 'status-tag-muted': item.status !== 'uploaded' }">
              {{ item.status === 'uploaded' ? '已上传' : '待上传' }}
            </span>
          </div>

          <a
            v-if="item.publicUrl"
            class="share-link-text"
            :href="item.publicUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ item.publicUrl }}
          </a>

          <label v-else class="module-upload">
            <span class="secondary-button">
              {{ uploadingModuleCode === item.moduleCode ? '上传中...' : '上传该模块' }}
            </span>
            <input
              accept="image/*"
              type="file"
              :disabled="uploadingModuleCode === item.moduleCode"
              @change="onUploadModule(item.moduleCode, $event)"
            />
          </label>
        </article>
      </div>
      <div class="pill-row" style="margin-top: 16px">
        <span class="pill">模块进度：{{ project.uploadedModuleCount }}/{{ project.requiredModuleCount }}</span>
        <span class="pill">{{ project.previewReady ? '已开放 360/3D 预览' : '预览未开放' }}</span>
      </div>
    </section>

    <section class="card">
      <h3 class="section-title">原始照片地址</h3>
      <p class="section-copy">{{ project.originalImageUrl }}</p>
    </section>
  </template>

  <section v-else class="card">
    <p class="section-copy">{{ errorMessage || '项目不存在' }}</p>
  </section>
</template>
