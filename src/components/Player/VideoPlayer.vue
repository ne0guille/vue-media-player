<template>
  <div class="video-player p-6 rounded-lg shadow-lg overflow-hidden relative">
    <video v-media-ref="setPlayer" :src="props.src" class="w-full rounded-lg neon-border"></video>
    <div class="flex align-middle justify-center mt-4">
      <slot name="controls">
        <button class="btn-neon" @click="handlePlay">
          {{ isPlaying ? 'Pause' : 'Play' }} video
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  setPlayer: {
    type: Function,
    required: true
  },
  isPlaying: {
    type: Boolean,
    default: false
  },
  togglePlay: {
    type: Function,
    required: true
  }
})
const handlePlay = () => {
  props.togglePlay()
}
</script>
<style>
.neon-border {
  box-shadow:
    0 0 5px rgba(255, 0, 255, 0.5),
    0 0 15px rgba(255, 0, 255, 0.5),
    0 0 30px rgba(255, 0, 255, 0.7);
}
</style>
