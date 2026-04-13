<script setup lang="ts">
import {
  AmbientLight,
  BackSide,
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
} from 'three'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  styleCode: string
  roomType: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)

let renderer: WebGLRenderer | null = null
let camera: PerspectiveCamera | null = null
let animationFrame = 0
let lon = 0
let lat = 0
let isDragging = false
let pointerStart = new Vector2()
let pointerOrigin = new Vector2()

const palettes: Record<string, [string, string, string]> = {
  cream: ['#f6efe5', '#d7b89a', '#9d6f46'],
  modern: ['#ece8e3', '#8d8175', '#3f454b'],
  wood: ['#f2eadf', '#cf9b61', '#7a5b3f'],
  nordic: ['#f2f7f4', '#b8c9c2', '#6b7b77'],
}

function createPanoramaTexture() {
  const [base, mid, accent] = palettes[props.styleCode] ?? palettes.cream
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1024
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, base)
  gradient.addColorStop(0.55, '#ffffff')
  gradient.addColorStop(1, mid)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = 'rgba(255,255,255,0.72)'
  for (let index = 0; index < 8; index += 1) {
    ctx.fillRect(index * 256 + 20, 180, 180, 460)
  }

  ctx.fillStyle = accent
  ctx.fillRect(0, 700, canvas.width, 324)

  ctx.fillStyle = 'rgba(255,255,255,0.16)'
  for (let index = 0; index < 40; index += 1) {
    ctx.fillRect(index * 60, 720 + (index % 2) * 24, 30, 260)
  }

  ctx.fillStyle = 'rgba(61, 39, 22, 0.72)'
  ctx.font = '700 72px Arial'
  ctx.fillText(`${props.roomType} · 360 Preview`, 80, 120)
  ctx.font = '400 34px Arial'
  ctx.fillText('模块上传完成后开放的沉浸式环视预览', 80, 170)

  return new CanvasTexture(canvas)
}

function updateCameraDirection() {
  if (!camera) {
    return
  }

  lat = Math.max(-85, Math.min(85, lat))
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = (lon * Math.PI) / 180
  const x = 500 * Math.sin(phi) * Math.cos(theta)
  const y = 500 * Math.cos(phi)
  const z = 500 * Math.sin(phi) * Math.sin(theta)
  camera.lookAt(x, y, z)
}

function handlePointerDown(event: PointerEvent) {
  isDragging = true
  pointerStart.set(event.clientX, event.clientY)
  pointerOrigin.set(lon, lat)
}

function handlePointerMove(event: PointerEvent) {
  if (!isDragging) {
    return
  }

  lon = pointerOrigin.x + (pointerStart.x - event.clientX) * 0.12
  lat = pointerOrigin.y + (event.clientY - pointerStart.y) * 0.12
}

function stopDragging() {
  isDragging = false
}

function handleResize() {
  if (!containerRef.value || !renderer || !camera) {
    return
  }

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function mountPreview() {
  if (!containerRef.value) {
    return
  }

  const scene = new Scene()
  camera = new PerspectiveCamera(75, containerRef.value.clientWidth / containerRef.value.clientHeight, 1, 1100)
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.innerHTML = ''
  containerRef.value.appendChild(renderer.domElement)

  const texture = createPanoramaTexture()
  const geometry = new SphereGeometry(500, 60, 40)
  geometry.scale(-1, 1, 1)
  const material = new MeshBasicMaterial({
    map: texture ?? undefined,
    side: BackSide,
  })
  const sphere = new Mesh(geometry, material)
  scene.add(sphere)
  scene.add(new AmbientLight('#ffffff', 1))

  const tick = () => {
    updateCameraDirection()
    renderer?.render(scene, camera!)
    animationFrame = window.requestAnimationFrame(tick)
  }

  tick()

  containerRef.value.addEventListener('pointerdown', handlePointerDown)
  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('pointerup', stopDragging)
  window.addEventListener('resize', handleResize)
}

onMounted(mountPreview)

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame)
  stopDragging()
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerup', stopDragging)
  window.removeEventListener('resize', handleResize)
  if (containerRef.value) {
    containerRef.value.removeEventListener('pointerdown', handlePointerDown)
  }
  renderer?.dispose()
})
</script>

<template>
  <div ref="containerRef" class="three-room panorama-room"></div>
</template>
