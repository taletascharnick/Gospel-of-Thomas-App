import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('got-theme') || 'light')

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('got-theme', theme.value)
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  return { theme, toggleTheme }
}
