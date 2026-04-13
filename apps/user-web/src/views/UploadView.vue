<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { createProject, createRenderTask, createUploadPolicy, uploadRoomPhoto } from '../lib/api'
import { useStyleCatalogStore } from '../stores/style-catalog'

const router = useRouter()
const styleStore = useStyleCatalogStore()

const selectedFile = ref<File | null>(null)
const submitting = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '毛坯房方案 A',
  roomType: styleStore.roomTypes[0],
  styleCode: styleStore.defaultPreset.code,
  budgetLevel: styleStore.budgetLevels[1],
  constraints: '保留门窗位置\n不改房型\n偏软装方案',
})

function onSelectFile(event: Event) {
  const target = event.target as HTMLInputElement
  selectedFile.value = target.files?.[0] ?? null
}

async function submitProject() {
  errorMessage.value = ''
  submitting.value = true

  try {
    const upload = selectedFile.value
      ? await uploadRoomPhoto(selectedFile.value)
      : await createUploadPolicy({
          fileName: `room-${Date.now()}.jpg`,
          contentType: 'image/jpeg',
          fileSize: 0,
        })

    const constraints = form.constraints
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean)

    const project = await createProject({
      name: form.name,
      roomType: form.roomType,
      originalImageUrl: upload.publicUrl,
      uploadId: upload.uploadId,
      styleCode: form.styleCode,
      budgetLevel: form.budgetLevel,
      constraints,
    })

    const task = await createRenderTask(project.id, {
      styleCode: form.styleCode,
      budgetLevel: form.budgetLevel,
      constraints,
      candidateCount: 4,
    })

    await router.push({
      name: 'project-results',
      params: { id: project.id },
      query: { taskId: task.id },
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '创建项目失败'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="grid-2">
    <article class="card">
      <h2 class="section-title">创建效果图任务</h2>
      <p class="section-copy">
        这一页已经连上后端上传、项目创建和渲染任务接口。选择完风格后会直接创建项目并返回结果页。
      </p>

      <div class="form-shell" style="margin-top: 18px">
        <label class="field-stack">
          <span class="field-label">项目名称</span>
          <input v-model="form.name" class="text-input" placeholder="例如：604 客厅首版方案" />
        </label>

        <label class="field-stack">
          <span class="field-label">房间类型</span>
          <select v-model="form.roomType" class="native-select">
            <option v-for="item in styleStore.roomTypes" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>

        <label class="field-stack">
          <span class="field-label">预算偏好</span>
          <select v-model="form.budgetLevel" class="native-select">
            <option v-for="item in styleStore.budgetLevels" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>

        <label class="field-stack">
          <span class="field-label">上传照片</span>
          <div class="file-box">
            <input accept="image/*" type="file" @change="onSelectFile" />
            <span class="muted">
              {{ selectedFile ? `已选择：${selectedFile.name}` : '当前未选择文件，会使用后端生成的占位资源。' }}
            </span>
          </div>
        </label>

        <div class="field-stack">
          <span class="field-label">风格方案</span>
          <div class="style-grid">
            <button
              v-for="preset in styleStore.presets"
              :key="preset.code"
              class="style-option"
              :class="{ active: form.styleCode === preset.code }"
              type="button"
              @click="form.styleCode = preset.code"
            >
              <h3 class="style-name">{{ preset.name }}</h3>
              <p class="style-desc">{{ preset.mood }}</p>
              <div class="swatches">
                <span
                  v-for="color in preset.colors"
                  :key="color"
                  class="swatch"
                  :style="{ background: color }"
                />
              </div>
            </button>
          </div>
        </div>

        <label class="field-stack">
          <span class="field-label">保留约束</span>
          <textarea
            v-model="form.constraints"
            class="text-area"
            placeholder="每行一条，例如：保留门窗位置"
          />
        </label>

        <div v-if="errorMessage" class="pill">{{ errorMessage }}</div>

        <button class="primary-button" type="button" :disabled="submitting" @click="submitProject">
          {{ submitting ? '正在创建项目...' : '创建并生成效果图' }}
        </button>
      </div>
    </article>

    <article class="card">
      <h2 class="section-title">当前接口链路</h2>
      <div class="three-stage">
        <div class="pill">POST /v1/uploads/policy</div>
        <div class="pill">POST /v1/projects</div>
        <div class="pill">POST /v1/projects/:id/render</div>
        <div class="pill">GET /v1/render-tasks/:taskId</div>
      </div>
      <p class="section-copy" style="margin-top: 18px">
        等这条链路稳定之后，我们再把真实对象存储上传和 MiniMax 回调接进去，前端流程基本不用大改。
      </p>
    </article>
  </section>
</template>
