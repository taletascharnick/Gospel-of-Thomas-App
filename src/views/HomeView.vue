<template>
  <div>
    <!-- Guidance modal on first visit -->
    <GuidanceModal v-if="showGuidance" @close="showGuidance = false" />

    <div class="container">
      <!-- Hero -->
      <section class="home-hero" aria-labelledby="home-title">
        <svg class="home-hero__ornament" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="2.5" opacity="0.5"/>
          <circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
          <circle cx="50" cy="50" r="8"  fill="currentColor" opacity="0.6"/>
        </svg>
        <h1 id="home-title" class="home-hero__title">Gospel of Thomas</h1>
        <p class="home-hero__subtitle">Contemplative Reflections on the 114 Sayings</p>
      </section>

      <!-- Featured quote: daily saying -->
      <blockquote v-if="dailySaying" class="home-quote">
        <p class="home-quote__text">{{ dailySaying.text }}</p>
        <footer class="home-quote__attribution">
          <RouterLink :to="`/sayings/${dailySaying.id}`" style="color:inherit;">Saying {{ dailySaying.number }}</RouterLink>
          &nbsp;·&nbsp; Today's saying
        </footer>
      </blockquote>

      <!-- What this is -->
      <div class="home-sections">
        <div class="home-section">
          <div class="home-section__icon" aria-hidden="true">📜</div>
          <h2 class="home-section__title">The Text</h2>
          <p class="home-section__body">
            Discovered in 1945 near Nag Hammadi (Egypt), the Gospel of Thomas is a 2nd-century, non-canonical collection
            of 114 sayings attributed to Jesus. There is no narrative. The focus is instead on secret, wisdom-based teachings.
            Many of the sayings will be familiar, if you have read the canonical gospels — but often with a twist that invites you to see them in a new way.
          </p>
        </div>

        <div class="home-section">
          <div class="home-section__icon" aria-hidden="true">🕯</div>
          <h2 class="home-section__title">The Practice</h2>
          <p class="home-section__body">
            Each saying is offered with a reflection and a contemplation prompt.
            The invitation is to slow down, not to analyse (with the mind) or achieve some goal, but to dwell — to let each saying work
            on you until something opens and you remember more of the spark within.
          </p>
        </div>

        <div class="home-section">
          <div class="home-section__icon" aria-hidden="true">🌿</div>
          <h2 class="home-section__title">How to Read</h2>
          <p class="home-section__body">
            You absolutely do not have to agree with the notes and reflections on these sayings. They are offered as a kind of "companion" to the text, not as an authoritative interpretation. See if it resonates with what you experience when you read the saying. If it does, great! If not, that's great too.  
          </p>
        </div>

        <div class="home-section">
          <div class="home-section__icon" aria-hidden="true">◎</div>
          <h2 class="home-section__title">Guidance on reading the Gospel of Thomas</h2>
          <p class="home-section__body">
            Try to approach the sayings with openness and curiosity, rather than a desire to achieve some goal.
            Try to view the text with a "unity lense" rather than a "dualistic lense". For example, rather than trying to interpret "the kingdom of heaven" as a place you go after you die, try to see it as a way of being that is available here and now. Not somewhere outside of yourself
            but as a dimension of reality that you can access within your own experience.
           </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="home-cta">
        <RouterLink to="/sayings" class="btn btn-primary" style="font-size:0.85rem; padding: 0.8rem 2rem;">
          Enter the Sayings
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GuidanceModal from '../components/GuidanceModal.vue'
import { useSayings } from '../composables/useSayings.js'

const showGuidance = ref(!localStorage.getItem('got-guidance-seen'))

const { publishedSayings } = useSayings()

// Rotate through published sayings — one per day
const dailySaying = computed(() => {
  const list = publishedSayings.value
  if (!list.length) return null
  const dayIndex = Math.floor(Date.now() / 86400000)
  return list[dayIndex % list.length]
})
</script>
