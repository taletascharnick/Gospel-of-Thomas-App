<template>
  <RouterLink
    :to="`/sayings/${saying.id}`"
    class="saying-card"
    :style="{ animationDelay: `${index * 40}ms` }"
    :aria-label="`Saying ${saying.number}`"
  >
    <span class="saying-card__number">
      Saying {{ saying.number }}
      <span v-if="isBookmarked" class="saying-card__bookmark-dot" aria-label="Bookmarked" />
    </span>
    <p class="saying-card__text">{{ saying.text }}</p>
    <span v-if="!saying.published" class="saying-card__badge">Draft</span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  saying: { type: Object, required: true },
  index:  { type: Number, default: 0 }
})

function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('got-bookmarks') || '[]') }
  catch { return [] }
}
const isBookmarked = computed(() => getBookmarks().includes(props.saying.id))
</script>
