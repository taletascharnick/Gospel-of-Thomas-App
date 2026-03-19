import { ref } from 'vue'

const isAuthenticated = ref(false)

// VITE_ADMIN_HASH: SHA-256 of admin password, embedded at build time.
// Set this as a GitHub repository secret (VITE_ADMIN_HASH) for production.
// When set, nobody can set a new password — only the correct password grants access.
// Leave unset in local dev to use the localStorage flow.
const ENV_HASH = import.meta.env.VITE_ADMIN_HASH || ''

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export function useAdmin() {
  // true when a server-side hash is configured (production)
  const isEnvAuth = !!ENV_HASH

  function hasPassword() {
    if (isEnvAuth) return true
    return !!localStorage.getItem('got-admin-hash')
  }

  async function setPassword(password) {
    if (isEnvAuth) return // disallowed in production
    const hash = await sha256(password)
    localStorage.setItem('got-admin-hash', hash)
    isAuthenticated.value = true
  }

  async function login(password) {
    const hash = await sha256(password)
    if (isEnvAuth) {
      if (hash === ENV_HASH) {
        isAuthenticated.value = true
        return true
      }
      return false
    }
    const storedHash = localStorage.getItem('got-admin-hash')
    if (!storedHash) return false
    if (hash === storedHash) {
      isAuthenticated.value = true
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
  }

  return { isAuthenticated, isEnvAuth, hasPassword, setPassword, login, logout }
}
