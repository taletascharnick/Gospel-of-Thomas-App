<template>
  <nav class="nav-bar" :class="{ 'nav-bar--hidden': hidden }" role="navigation" aria-label="Site navigation">
    <div class="container">
      <!-- Back link (only on non-home routes) -->
      <RouterLink
        v-if="route.name !== 'home'"
        :to="backRoute"
        class="nav-back"
        aria-label="Go back"
      >
        &#8592; <span>{{ backLabel }}</span>
      </RouterLink>
      <span v-else class="nav-back" style="visibility:hidden">&#8592;</span>

      <!-- Site title -->
      <RouterLink to="/" class="nav-title">Gospel of Thomas</RouterLink>

      <!-- Right controls -->
      <div class="nav-right">
        <button
          class="btn-icon"
          :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
          :title="theme === 'light' ? 'Dark mode' : 'Light mode'"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ theme === 'light' ? '☽' : '☀' }}</span>
        </button>

        <button
          class="btn-icon"
          :aria-label="updateLabel"
          :title="updateLabel"
          :disabled="updateState === 'checking'"
          @click="checkForUpdate"
        >
          <span aria-hidden="true" :class="{ 'spin': updateState === 'checking' }">↻</span>
        </button>

        <RouterLink to="/admin" class="btn-icon" aria-label="Admin panel" title="Admin">
          <span aria-hidden="true">⚙</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme.js'

const route = useRoute()
const { theme, toggleTheme } = useTheme()

const backRoute = computed(() => {
  if (route.name === 'saying') return '/sayings'
  if (route.name === 'admin')  return '/'
  return '/'
})

const backLabel = computed(() => {
  if (route.name === 'saying') return 'Sayings'
  return 'Home'
})

// ── Update / sync ────────────────────────────────────────────────
// States: 'idle' | 'checking' | 'updated' | 'current'
const updateState = ref('idle')
const updateLabel = computed(() => {
  if (updateState.value === 'checking') return 'Checking for update…'
  if (updateState.value === 'updated')  return 'Updated! Reloading…'
  if (updateState.value === 'current')  return 'Already up to date'
  return 'Check for update'
})

async function checkForUpdate() {
  if (!('serviceWorker' in navigator)) {
    window.location.reload()
    return
  }
  updateState.value = 'checking'
  try {
    const reg = await navigator.serviceWorker.getRegistration()
    if (!reg) { window.location.reload(); return }

    await reg.update()

    const waiting = reg.waiting
    if (waiting) {
      // New version ready — activate it and reload
      waiting.postMessage({ type: 'SKIP_WAITING' })
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        updateState.value = 'updated'
        window.location.reload()
      })
    } else {
      // Already on the latest version
      updateState.value = 'current'
      setTimeout(() => { updateState.value = 'idle' }, 2500)
    }
  } catch {
    window.location.reload()
  }
}

// ── Auto-hide nav on scroll ──────────────────────────────────────
const hidden = ref(false)
let lastY = 0
function onScroll() {
  const y = window.scrollY
  hidden.value = y > 80 && y > lastY
  lastY = y
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spin {
  display: inline-block;
  animation: spin 0.8s linear infinite;
}
</style>
