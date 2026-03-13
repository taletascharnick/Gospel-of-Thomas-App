<template>
  <Teleport to="body">
    <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="guidance-title">
      <div class="modal">
        <h2 id="guidance-title" class="modal__title">Before You Enter</h2>

        <div class="modal__body">
          <p>
            The Gospel of Thomas is a collection of 114 sayings attributed to Jesus,
            discovered in 1945 near Nag Hammadi in Egypt. Unlike the narrative gospels,
            it contains no stories, miracles, or accounts of the resurrection — only
            sayings. Many are paradoxical, unexpected, even unsettling.
          </p>
          <p>
            These sayings are designed to be sat with, not simply read through.
            They often work by frustrating the ordinary mind — by refusing to give
            the answer you expect — until something deeper than ordinary thinking opens.
          </p>
          <p>
            Before you enter, take a moment to arrive. You do not need to understand
            anything. You do not need to agree with anything. Bring only your attention
            and your willingness to be surprised.
          </p>

          <div class="modal__breath">
            <em>Take three slow breaths.<br>
            Let each exhale release whatever you carried in with you.<br>
            Now you are here.</em>
          </div>

          <p style="color: var(--text-muted); font-size: 0.9rem;">
            You can return to this guidance at any time from the home page.
          </p>
        </div>

        <div class="modal__footer">
          <button class="btn btn-primary" @click="enter">I am ready — enter the sayings</button>
          <button class="btn btn-ghost" @click="dismiss">Skip for now</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()

function enter() {
  localStorage.setItem('got-guidance-seen', '1')
  emit('close')
  router.push('/sayings')
}

function dismiss() {
  localStorage.setItem('got-guidance-seen', '1')
  emit('close')
}
</script>
