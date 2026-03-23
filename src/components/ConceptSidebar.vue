<template>
  <Teleport to="body">
    <div class="sidebar-overlay" @click="$emit('close')" aria-hidden="true" />
    <aside
      class="sidebar"
      role="complementary"
      aria-label="Concept definitions"
    >
      <div class="sidebar__header">
        <span class="sidebar__title">Concepts &amp; Terms</span>
        <button class="btn-icon sidebar__close" @click="$emit('close')" aria-label="Close sidebar">✕</button>
      </div>

      <div class="sidebar__body">
        <template v-if="concepts.length">
          <div
            v-for="concept in concepts"
            :key="concept.term"
            class="concept-entry"
          >
            <div class="concept-entry__term">{{ concept.term }}</div>
            <div class="concept-entry__definition" v-html="parsedDefinition(concept.definition)" />
          </div>
        </template>

        <p v-else style="color: var(--text-muted); font-size: 0.9rem;">
          No concept definitions have been added for this saying yet. You can add them via the admin panel.
        </p>
      </div>
    </aside>
  </Teleport>
</template>

<script setup>
import { marked } from 'marked'

defineProps({
  concepts: { type: Array, required: true }
})
defineEmits(['close'])

function parsedDefinition(text) {
  return text ? marked.parse(text) : ''
}
</script>
