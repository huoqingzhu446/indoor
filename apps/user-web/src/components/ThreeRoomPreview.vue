<script setup lang="ts">
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from 'three'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  styleCode: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)

let renderer: WebGLRenderer | null = null
let camera: PerspectiveCamera | null = null
let roomGroup: Group | null = null
let animationFrame = 0

const palettes: Record<string, { background: string; wall: string; floor: string; accent: string }> = {
  cream: {
    background: '#f7efdf',
    wall: '#f2ece2',
    floor: '#bc8d63',
    accent: '#d9c0a9',
  },
  modern: {
    background: '#efebe3',
    wall: '#e7e1d8',
    floor: '#8d7f73',
    accent: '#58514f',
  },
  wood: {
    background: '#f2eadf',
    wall: '#efe4d2',
    floor: '#b07846',
    accent: '#dfc8a7',
  },
  nordic: {
    background: '#f5f7f3',
    wall: '#f8faf7',
    floor: '#b9c8c0',
    accent: '#82938d',
  },
}

function getPalette() {
  return palettes[props.styleCode] ?? palettes.cream
}

function buildRoom(scene: Scene) {
  const palette = getPalette()
  roomGroup = new Group()

  const wallMaterial = new MeshStandardMaterial({ color: palette.wall, roughness: 0.94 })
  const floorMaterial = new MeshStandardMaterial({ color: palette.floor, roughness: 0.85 })
  const accentMaterial = new MeshStandardMaterial({ color: palette.accent, roughness: 0.65 })

  const backWall = new Mesh(new PlaneGeometry(9, 4.5), wallMaterial)
  backWall.position.set(0, 2.25, -4.5)

  const leftWall = new Mesh(new PlaneGeometry(9, 4.5), wallMaterial)
  leftWall.rotation.y = Math.PI / 2
  leftWall.position.set(-4.5, 2.25, 0)

  const rightWall = new Mesh(new PlaneGeometry(9, 4.5), wallMaterial)
  rightWall.rotation.y = -Math.PI / 2
  rightWall.position.set(4.5, 2.25, 0)

  const floor = new Mesh(new PlaneGeometry(9, 9), floorMaterial)
  floor.rotation.x = -Math.PI / 2
  floor.position.set(0, 0, 0)

  const sofa = new Mesh(new BoxGeometry(2.4, 0.9, 1.1), accentMaterial)
  sofa.position.set(-1.4, 0.46, -2.4)

  const sideCabinet = new Mesh(new BoxGeometry(1.1, 0.7, 0.42), accentMaterial)
  sideCabinet.position.set(2.2, 0.36, -3.9)

  const table = new Mesh(new BoxGeometry(1.2, 0.35, 0.7), new MeshStandardMaterial({ color: '#f4eee4', roughness: 0.48 }))
  table.position.set(0.4, 0.2, -1.6)

  roomGroup.add(backWall, leftWall, rightWall, floor, sofa, sideCabinet, table)
  scene.add(roomGroup)
}

function renderScene() {
  if (!containerRef.value) {
    return
  }

  const palette = getPalette()
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  const scene = new Scene()
  scene.background = new Color(palette.background)

  camera = new PerspectiveCamera(46, width / height, 0.1, 100)
  camera.position.set(6.2, 4.8, 8.8)
  camera.lookAt(0, 1.4, -2.2)

  renderer = new WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  containerRef.value.innerHTML = ''
  containerRef.value.appendChild(renderer.domElement)

  const ambientLight = new AmbientLight('#fff7ec', 1.35)
  const directionalLight = new DirectionalLight('#ffe9cb', 2.2)
  directionalLight.position.set(5, 7, 5)
  scene.add(ambientLight, directionalLight)

  buildRoom(scene)

  const tick = () => {
    if (roomGroup && renderer && camera) {
      roomGroup.rotation.y += 0.0035
      renderer.render(scene, camera)
      animationFrame = window.requestAnimationFrame(tick)
    }
  }

  tick()
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

onMounted(() => {
  renderScene()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', handleResize)
  renderer?.dispose()
})
</script>

<template>
  <div ref="containerRef" class="three-room"></div>
</template>
