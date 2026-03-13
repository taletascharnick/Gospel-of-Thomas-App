<template>
  <div class="container admin-view">
    <!-- ── Not authenticated ───────────────────────────────────── -->
    <div v-if="!isAuthenticated" class="admin-auth">
      <h1 class="admin-auth__title">Admin</h1>
      <p class="admin-auth__sub">
        {{ hasPassword() ? 'Enter your password to continue.' : 'Set a password to protect this panel.' }}
      </p>

      <form @submit.prevent="handleAuth">
        <div class="form-group">
          <label for="admin-pw">{{ hasPassword() ? 'Password' : 'New password' }}</label>
          <input
            id="admin-pw"
            v-model="passwordInput"
            type="password"
            autocomplete="current-password"
            required
            placeholder="Enter password"
          />
        </div>

        <div v-if="!hasPassword()" class="form-group">
          <label for="admin-pw-confirm">Confirm password</label>
          <input
            id="admin-pw-confirm"
            v-model="confirmInput"
            type="password"
            autocomplete="new-password"
            required
            placeholder="Confirm password"
          />
        </div>

        <p v-if="authError" class="form-error">{{ authError }}</p>

        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:0.5rem;">
          {{ hasPassword() ? 'Sign in' : 'Set password &amp; enter' }}
        </button>
      </form>

      <p style="margin-top:1.5rem; font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
        Note: This is a lightweight, personal-use panel. The password hash is stored
        in your browser's localStorage. It is suitable for solo content authoring
        but does not provide server-side access control.
      </p>
    </div>

    <!-- ── Authenticated ──────────────────────────────────────── -->
    <template v-else>
      <!-- Toolbar -->
      <div class="admin-toolbar">
        <h1 style="font-family:var(--font-serif); font-size:1.6rem; flex:1;">Admin Panel</h1>
        <button class="btn btn-ghost" @click="exportContent">Export JSON</button>
        <label class="btn btn-ghost" style="cursor:pointer;">
          Import JSON
          <input type="file" accept=".json" style="display:none;" @change="handleImport" />
        </label>
        <button class="btn btn-ghost" @click="showChangePassword = !showChangePassword">
          Change password
        </button>
        <button class="btn btn-ghost" @click="logout">Sign out</button>
      </div>

      <!-- Change password form -->
      <div v-if="showChangePassword" class="admin-editor" style="margin-bottom:1.5rem; max-width:380px;">
        <h2 class="admin-editor__heading">Change Password</h2>
        <form @submit.prevent="handleChangePassword">
          <div class="form-group">
            <label>New password</label>
            <input v-model="newPw" type="password" required placeholder="New password" />
          </div>
          <div class="form-group">
            <label>Confirm</label>
            <input v-model="newPwConfirm" type="password" required placeholder="Confirm" />
          </div>
          <p v-if="changePwError" class="form-error">{{ changePwError }}</p>
          <button type="submit" class="btn btn-primary">Update password</button>
        </form>
      </div>

      <div style="display:flex; gap:1.5rem; align-items:flex-start; flex-wrap:wrap;">
        <!-- Saying list (left column) -->
        <div style="flex:0 0 220px; min-width:180px;">
          <p style="font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.75rem;">
            All Sayings
          </p>
          <input
            v-model="listFilter"
            type="search"
            placeholder="Filter…"
            class="sayings-view__search"
            style="max-width:100%; margin-bottom:0.75rem;"
          />
          <div class="admin-saying-list" style="max-height:65vh; overflow-y:auto;">
            <button
              v-for="s in filteredList"
              :key="s.id"
              class="admin-saying-item"
              :class="{ active: editingId === s.id }"
              @click="selectSaying(s.id)"
              :aria-pressed="editingId === s.id"
            >
              <span class="admin-saying-item__num">{{ s.number }}.</span>
              <span class="admin-saying-item__text">{{ s.text }}</span>
              <span
                class="admin-saying-item__badge"
                :class="s.published ? 'badge-published' : 'badge-draft'"
              >
                {{ s.published ? 'Live' : 'Draft' }}
              </span>
            </button>
          </div>
        </div>

        <!-- Editor (right column) -->
        <div style="flex:1; min-width:0;">
          <div v-if="editDraft" class="admin-editor">
            <h2 class="admin-editor__heading">Saying {{ editDraft.number }}</h2>

            <form @submit.prevent="saveDraft">
              <!-- Published toggle -->
              <div class="form-group">
                <label class="toggle-wrap">
                  <span class="toggle">
                    <input type="checkbox" v-model="editDraft.published" />
                    <span class="toggle-track"></span>
                  </span>
                  {{ editDraft.published ? 'Published (visible to readers)' : 'Draft (hidden from readers)' }}
                </label>
              </div>

              <!-- Saying text -->
              <div class="form-group">
                <label :for="`text-${editDraft.id}`">Saying Text</label>
                <textarea
                  :id="`text-${editDraft.id}`"
                  v-model="editDraft.text"
                  class="tall"
                  placeholder="The saying text…"
                />
              </div>

              <!-- Reflection -->
              <div class="form-group">
                <label :for="`refl-${editDraft.id}`">Reflection</label>
                <textarea
                  :id="`refl-${editDraft.id}`"
                  v-model="editDraft.reflection"
                  class="tall"
                  style="min-height:260px;"
                  placeholder="Your in-depth reflection…"
                />
              </div>

              <!-- Contemplation prompt -->
              <div class="form-group">
                <label :for="`prompt-${editDraft.id}`">Contemplation Prompt</label>
                <textarea
                  :id="`prompt-${editDraft.id}`"
                  v-model="editDraft.contemplationPrompt"
                  placeholder="A question or focal point for meditation…"
                />
              </div>

              <!-- Related sayings -->
              <div class="form-group">
                <label :for="`related-${editDraft.id}`">Related Sayings (comma-separated numbers)</label>
                <input
                  :id="`related-${editDraft.id}`"
                  v-model="relatedInput"
                  type="text"
                  placeholder="e.g. 3, 22, 106"
                />
              </div>

              <!-- Concepts -->
              <div class="form-group">
                <label>Concept Definitions</label>
                <div
                  v-for="(concept, idx) in editDraft.concepts"
                  :key="idx"
                  class="concept-editor"
                >
                  <div class="concept-editor__header">
                    Concept {{ idx + 1 }}
                    <button type="button" class="btn-icon" @click="removeConcept(idx)" aria-label="Remove concept">✕</button>
                  </div>
                  <div class="form-group">
                    <label>Term</label>
                    <input v-model="concept.term" type="text" placeholder="e.g. Kingdom" />
                  </div>
                  <div class="form-group">
                    <label>Definition</label>
                    <textarea v-model="concept.definition" placeholder="Definition…" />
                  </div>
                </div>
                <button type="button" class="btn btn-ghost" style="margin-top:0.5rem;" @click="addConcept">
                  + Add concept
                </button>
              </div>

              <div style="display:flex; gap:0.75rem; margin-top:0.5rem;">
                <button type="submit" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-ghost" @click="editDraft = null">Cancel</button>
              </div>

              <p v-if="saveMessage" style="color:var(--accent); font-size:0.85rem; margin-top:0.75rem;">
                {{ saveMessage }}
              </p>
            </form>
          </div>

          <div v-else style="color:var(--text-muted); padding-top:1rem; font-size:0.95rem;">
            Select a saying from the list to begin editing.
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAdmin } from '../composables/useAdmin.js'
import { useSayings } from '../composables/useSayings.js'

const { isAuthenticated, hasPassword, setPassword, login, logout } = useAdmin()
const { sayings, updateSaying, exportContent, importContent } = useSayings()

// ─── Auth ────────────────────────────────────────────────────────
const passwordInput = ref('')
const confirmInput  = ref('')
const authError     = ref('')

async function handleAuth() {
  authError.value = ''
  if (!hasPassword()) {
    if (passwordInput.value !== confirmInput.value) {
      authError.value = 'Passwords do not match.'
      return
    }
    if (passwordInput.value.length < 6) {
      authError.value = 'Password must be at least 6 characters.'
      return
    }
    await setPassword(passwordInput.value)
  } else {
    const ok = await login(passwordInput.value)
    if (!ok) authError.value = 'Incorrect password.'
  }
  passwordInput.value = ''
  confirmInput.value  = ''
}

// ─── Change password ─────────────────────────────────────────────
const showChangePassword = ref(false)
const newPw        = ref('')
const newPwConfirm = ref('')
const changePwError = ref('')

async function handleChangePassword() {
  changePwError.value = ''
  if (newPw.value !== newPwConfirm.value) { changePwError.value = 'Passwords do not match.'; return }
  if (newPw.value.length < 6) { changePwError.value = 'Password must be at least 6 characters.'; return }
  await setPassword(newPw.value)
  newPw.value = ''
  newPwConfirm.value = ''
  showChangePassword.value = false
}

// ─── Saying list ─────────────────────────────────────────────────
const listFilter = ref('')
const filteredList = computed(() => {
  const q = listFilter.value.toLowerCase()
  if (!q) return sayings.value
  return sayings.value.filter(s =>
    s.text.toLowerCase().includes(q) || String(s.number).includes(q)
  )
})

// ─── Editor ──────────────────────────────────────────────────────
const editingId    = ref(null)
const editDraft    = ref(null)
const relatedInput = ref('')
const saveMessage  = ref('')

function selectSaying(id) {
  const s = sayings.value.find(s => s.id === id)
  if (!s) return
  editingId.value = id
  editDraft.value = {
    ...JSON.parse(JSON.stringify(s)),
    concepts: s.concepts ? JSON.parse(JSON.stringify(s.concepts)) : []
  }
  relatedInput.value = (s.relatedSayings || []).join(', ')
  // Do NOT clear saveMessage here — it is only cleared by its own timeout
}

function addConcept() {
  editDraft.value.concepts.push({ term: '', definition: '' })
}

function removeConcept(idx) {
  editDraft.value.concepts.splice(idx, 1)
}

function saveDraft() {
  const relatedArr = relatedInput.value
    .split(',')
    .map(v => parseInt(v.trim(), 10))
    .filter(n => !isNaN(n))

  // Deep-clone concepts to strip any reactive proxies before storing
  const plainConcepts = JSON.parse(JSON.stringify(editDraft.value.concepts || []))

  updateSaying(editDraft.value.id, {
    text:                editDraft.value.text,
    reflection:          editDraft.value.reflection,
    contemplationPrompt: editDraft.value.contemplationPrompt,
    concepts:            plainConcepts,
    relatedSayings:      relatedArr,
    published:           editDraft.value.published
  })

  saveMessage.value = 'Saved ✔'
  setTimeout(() => { saveMessage.value = '' }, 3000)
}

// ─── Import ───────────────────────────────────────────────────────
function handleImport(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = ev => {
    const ok = importContent(ev.target.result)
    alert(ok ? 'Content imported successfully.' : 'Import failed — invalid JSON file.')
    if (editingId.value) selectSaying(editingId.value)
  }
  reader.readAsText(file)
  e.target.value = ''
}

// (watch removed — it was re-running selectSaying after every save,
//  clearing the success message and re-initialising the form unnecessarily)
</script>
