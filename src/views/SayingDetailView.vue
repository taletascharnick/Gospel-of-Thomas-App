<template>
  <div>
    <!-- Reading progress bar -->
    <div class="reading-progress" :style="{ width: readingProgress + '%' }" aria-hidden="true" />
    <!-- 404 state -->
    <div v-if="!saying" class="container" style="padding-top:3rem; text-align:center;">
      <p style="color:var(--text-muted);">Saying not found.</p>
      <RouterLink to="/sayings" class="btn btn-ghost" style="margin-top:1rem;">Back to sayings</RouterLink>
    </div>

    <template v-else>
      <div class="container saying-detail">
        <!-- Label -->
        <p class="saying-detail__label">Saying {{ saying.number }}</p>

        <!-- Saying text -->
        <blockquote class="saying-detail__text">{{ saying.text }}</blockquote>

        <hr class="divider" />

        <!-- Reflection -->
        <p class="saying-detail__section-heading">Reflection</p>
        <div class="saying-detail__reflection">{{ saying.reflection }}</div>

        <!-- Contemplation prompt -->
        <template v-if="saying.contemplationPrompt">
          <hr class="divider" />
          <p class="saying-detail__section-heading">Contemplation</p>
          <blockquote class="saying-detail__prompt">{{ saying.contemplationPrompt }}</blockquote>
        </template>

        <!-- Related sayings -->
        <template v-if="saying.relatedSayings && saying.relatedSayings.length">
          <hr class="divider" />
          <p class="saying-detail__section-heading">Related Sayings</p>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            <RouterLink
              v-for="num in saying.relatedSayings"
              :key="num"
              :to="`/sayings/${num}`"
              class="btn btn-ghost"
              style="font-size:0.78rem; padding:0.35rem 0.85rem;"
            >
              Saying {{ num }}
            </RouterLink>
          </div>
        </template>

        <!-- Prev / Next navigation -->
        <div class="saying-detail__nav">
          <RouterLink
            v-if="prevSaying"
            :to="`/sayings/${prevSaying.id}`"
            class="btn btn-ghost"
          >
            ← Saying {{ prevSaying.number }}
          </RouterLink>
          <span v-else />

          <RouterLink
            v-if="nextSaying"
            :to="`/sayings/${nextSaying.id}`"
            class="btn btn-ghost"
          >
            Saying {{ nextSaying.number }} →
          </RouterLink>
          <span v-else />
        </div>
      </div>

      <!-- Action bar (bookmark, copy, concepts, share) -->
      <ActionSidebar
        :saying="saying"
        :concepts-open="conceptsOpen"
        @toggle-concepts="conceptsOpen = !conceptsOpen"
      />

      <!-- Concept sidebar -->
      <ConceptSidebar
        v-if="conceptsOpen"
        :concepts="saying.concepts || []"
        @close="conceptsOpen = false"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ActionSidebar from '../components/ActionSidebar.vue'
import ConceptSidebar from '../components/ConceptSidebar.vue'
import { useSayings } from '../composables/useSayings.js'

const props = defineProps({ id: { type: String, default: null } })
const route  = useRoute()
const { sayings, getSaying } = useSayings()

const sayingId   = computed(() => Number(props.id || route.params.id))
const saying     = computed(() => getSaying(sayingId.value))
const conceptsOpen = ref(false)

const prevSaying = computed(() => {
  const list = sayings.value.filter(s => s.published !== false)
  const idx = list.findIndex(s => s.id === sayingId.value)
  return idx > 0 ? list[idx - 1] : null
})

const nextSaying = computed(() => {
  const list = sayings.value.filter(s => s.published !== false)
  const idx = list.findIndex(s => s.id === sayingId.value)
  return idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null
})

// Close concept sidebar when navigating between sayings
watch(sayingId, () => { conceptsOpen.value = false })

// Reading progress
const readingProgress = ref(0)
function updateProgress() {
  const el = document.documentElement
  const scrolled = el.scrollTop || document.body.scrollTop
  const total = el.scrollHeight - el.clientHeight
  readingProgress.value = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0
}
onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>
