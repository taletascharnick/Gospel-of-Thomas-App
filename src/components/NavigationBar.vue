<template>
  <nav class="nav-bar" role="navigation" aria-label="Site navigation">
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

        <RouterLink to="/admin" class="btn-icon" aria-label="Admin panel" title="Admin">
          <span aria-hidden="true">⚙</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
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
</script>
