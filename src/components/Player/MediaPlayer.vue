<!-- problema : usar ref dynamically  -->

<template>
  <div class="audio-player">
    <h1 class="text-xl text-red-600">media type {{ props.mediaType }}</h1>
    <div v-if="props.mediaType === 'track'">
      <h3>Track</h3>
      <audio v-media-ref="props.setPlayerRef" :src="props.src">
        Your browser does not support the audio tag.
      </audio>
    </div>

    <div v-else-if="props.mediaType === 'video'">
      <h3 class="text-xl">VIDEO</h3>
      <VideoPlayer :src="props.src" />
    </div>

    <div class="controls">
      <slot name="controls">
        <button @click="togglePlay">Play audio</button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaType } from '@/types/Media'
import VideoPlayer from './VideoPlayer.vue'
import { ref, watch, nextTick, defineProps } from 'vue'
// TODO ver como forzar los valores MediaType al pasarlos
const props = defineProps({
  src: {
    type: String
  },
  setPlayerRef: {
    type: Function,
    required: true
  },
  mediaType: {
    type: String as () => MediaType
  }
})

const emit = defineEmits(['togglePlay'])
const togglePlay = () => emit('togglePlay')
</script>
