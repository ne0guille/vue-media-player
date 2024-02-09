<template>
  <div class="video-player">
    <video v-media-ref="setVideoElement" :src="props.src" width="640" height="360">
      Your browser does not support the video tag.
    </video>
    <div class="flex align-middle justify-center">
      <slot name="controls">
        <button
          class="bg-red-500 text-white text-lg my-4 p-4 w-full rounded-md"
          @click="togglePlay"
        >
          {{ isPlaying ? 'Pause' : 'Play' }} video
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { usePlayer } from '@/composables/usePlayer'

const { setVideoElement, togglePlay, isPlaying } = usePlayer()
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
