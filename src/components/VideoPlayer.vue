<template>
  <div class="video-player">
    <h2>VideoPlayer</h2>
    <video v-media-ref="setVideoElement" :src="videoSource" width="640" height="360">
      Your browser does not support the video tag.
    </video>
    <div class="flex align-middle justify-center">
      <slot name="controls">
        <button class="bg-red-500 text-white text-lg m-4 p-4" @click="togglePlay">
          Play video - {{ isPlaying }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
import { usePlayer } from '@/composables/usePlayer'

const { setVideoElement, togglePlay, isPlaying } = usePlayer()
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
const videoSource = ref<string>()

watch(
  () => props.src,
  (newVal) => {
    if (newVal) {
      videoSource.value = newVal
    }
  },
  { immediate: true }
)
</script>
