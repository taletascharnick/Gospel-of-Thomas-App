<template>
  <div class="container sayings-view">
    <div class="sayings-view__header">
      <h1 class="sayings-view__title">The Sayings</h1>
      <p class="sayings-view__meta">{{ visibleSayings.length }} of 114 sayings</p>
      <input
        v-model="query"
        type="search"
        class="sayings-view__search"
        placeholder="Search sayings…"
        aria-label="Search sayings"
      />
    </div>

    <div class="sayings-grid">
      <SayingCard
        v-for="saying in visibleSayings"
        :key="saying.id"
        :saying="saying"
      />
    </div>

    <p v-if="visibleSayings.length === 0" style="color:var(--text-muted); margin-top:2rem;">
      No sayings match your search.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SayingCard from '../components/SayingCard.vue'
import { useSayings } from '../composables/useSayings.js'

const { publishedSayings } = useSayings()
const query = ref('')

const visibleSayings = computed(() => {
  if (!query.value.trim()) return publishedSayings.value
  const q = query.value.toLowerCase()
  return publishedSayings.value.filter(s =>
    s.text.toLowerCase().includes(q) ||
    s.reflection.toLowerCase().includes(q) ||
    String(s.number).includes(q)
  )
})
</script>
