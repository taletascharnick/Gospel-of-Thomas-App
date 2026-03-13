import { ref, computed } from 'vue'
import { baseSayings } from '../data/sayings.js'

function loadOverrides() {
  try {
    const stored = localStorage.getItem('got-sayings-overrides')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

const overrides = ref(loadOverrides())

export function useSayings() {
  const sayings = computed(() =>
    baseSayings.map(s => ({ ...s, ...(overrides.value[s.id] || {}) }))
  )

  const publishedSayings = computed(() =>
    sayings.value.filter(s => s.published !== false)
  )

  function getSaying(id) {
    return sayings.value.find(s => s.id === Number(id))
  }

  function updateSaying(id, updates) {
    overrides.value = {
      ...overrides.value,
      [id]: { ...(overrides.value[id] || {}), ...updates }
    }
    localStorage.setItem('got-sayings-overrides', JSON.stringify(overrides.value))
  }

  function exportContent() {
    const data = JSON.stringify(overrides.value, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sayings-content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function importContent(json) {
    try {
      const data = JSON.parse(json)
      overrides.value = data
      localStorage.setItem('got-sayings-overrides', JSON.stringify(data))
      return true
    } catch {
      return false
    }
  }

  return { sayings, publishedSayings, getSaying, updateSaying, exportContent, importContent }
}
