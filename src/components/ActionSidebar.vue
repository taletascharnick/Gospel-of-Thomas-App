<template>
  <div class="action-bar" role="toolbar" aria-label="Saying actions">
    <!-- Concepts -->
    <button
      class="btn-icon"
      :class="{ active: conceptsOpen }"
      :aria-label="conceptsOpen ? 'Close concepts' : 'View concept definitions'"
      title="Concept definitions"
      @click="$emit('toggle-concepts')"
    >
      📖
    </button>

    <!-- Bookmark -->
    <button
      class="btn-icon"
      :class="{ active: isBookmarked }"
      :aria-label="isBookmarked ? 'Remove bookmark' : 'Bookmark this saying'"
      title="Bookmark"
      @click="toggleBookmark"
    >
      {{ isBookmarked ? '★' : '☆' }}
    </button>

    <!-- Copy text -->
    <button
      class="btn-icon"
      :aria-pressed="copied"
      aria-label="Copy saying text"
      title="Copy saying"
      @click="copyText"
    >
      {{ copied ? '✓' : '⎘' }}
    </button>

    <!-- Share -->
    <button
      v-if="canShare"
      class="btn-icon"
      aria-label="Share this saying"
      title="Share"
      @click="shareSaying"
    >
      ↗
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  saying:       { type: Object, required: true },
  conceptsOpen: { type: Boolean, default: false }
})
defineEmits(['toggle-concepts'])

const copied = ref(false)
const canShare = computed(() => !!navigator.share)

// ─── Bookmark ────────────────────────────────────────────────────
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('got-bookmarks') || '[]') }
  catch { return [] }
}

const isBookmarked = ref(getBookmarks().includes(props.saying.id))

function toggleBookmark() {
  const marks = getBookmarks()
  const idx = marks.indexOf(props.saying.id)
  if (idx === -1) marks.push(props.saying.id)
  else marks.splice(idx, 1)
  localStorage.setItem('got-bookmarks', JSON.stringify(marks))
  isBookmarked.value = idx === -1
}

// ─── Copy ────────────────────────────────────────────────────────
async function copyText() {
  const text = `Saying ${props.saying.number}\n\n${props.saying.text}`
  await navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1800)
}

// ─── Share ───────────────────────────────────────────────────────
async function shareSaying() {
  await navigator.share({
    title: `Gospel of Thomas — Saying ${props.saying.number}`,
    text: props.saying.text.slice(0, 200)
  }).catch(() => {})
}
</script>
