import { ref } from 'vue'

const isAuthenticated = ref(false)

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export function useAdmin() {
  function hasPassword() {
    return !!localStorage.getItem('got-admin-hash')
  }

  async function setPassword(password) {
    const hash = await sha256(password)
    localStorage.setItem('got-admin-hash', hash)
    isAuthenticated.value = true
  }

  async function login(password) {
    const storedHash = localStorage.getItem('got-admin-hash')
    if (!storedHash) return false
    const hash = await sha256(password)
    if (hash === storedHash) {
      isAuthenticated.value = true
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
  }

  return { isAuthenticated, hasPassword, setPassword, login, logout }
}
