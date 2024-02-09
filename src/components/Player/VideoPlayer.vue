<template>
  <div class="video-player">
    <video v-media-ref="setPlayer" :src="props.src" width="640" height="360">
      Your browser does not support the video tag.
    </video>
    <div class="flex align-middle justify-center">
      <slot name="controls">
        <button
          class="bg-red-500 text-white text-lg my-4 p-4 w-full rounded-md"
          @click="handlePlay"
        >
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
