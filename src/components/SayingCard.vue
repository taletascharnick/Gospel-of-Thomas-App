<template>
  <RouterLink :to="`/sayings/${saying.id}`" class="saying-card" :aria-label="`Saying ${saying.number}`">
    <span class="saying-card__number">Saying {{ saying.number }}</span>
    <p class="saying-card__text">{{ saying.text }}</p>
    <span v-if="!saying.published" class="saying-card__badge">Draft</span>
  </RouterLink>
</template>

<script setup>
defineProps({
  saying: { type: Object, required: true }
})
</script>
