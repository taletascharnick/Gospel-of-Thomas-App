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

    <!-- Share (native) -->
    <button
      v-if="canShare"
      class="btn-icon"
      aria-label="Share this saying"
      title="Share"
      @click="shareSaying"
    >
      ↗
    </button>

    <!-- Share to WhatsApp -->
    <a
      class="btn-icon"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share to WhatsApp"
      title="Share on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.855L.057 23.57a.75.75 0 0 0 .92.92l5.783-1.484A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-5.003-1.383l-.36-.214-3.733.957.993-3.636-.234-.374A9.715 9.715 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
      </svg>
    </a>
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

const whatsappUrl = computed(() => {
  const text = `*Saying ${props.saying.number} — Gospel of Thomas*\n\n"${props.saying.text}"\n\nhttps://taletascharnick.github.io/Gospel-of-Thomas-App/#/sayings/${props.saying.id}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
})

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
