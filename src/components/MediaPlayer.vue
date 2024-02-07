<!-- problema : usar ref dynamically  -->

<template>
  <div class="audio-player">
    <div v-if="props.mediaType === 'track'">
      <h3>Track</h3>
      <audio v-media-ref="props.setPlayerRef" :src="source">
        Your browser does not support the audio tag.
      </audio>
    </div>

    <!-- <video v-else-if="props.mediaType === 'video'" v-media-ref="props.setPlayerRef" :src="source">
      Your browser does not support the video tag.
    </video> -->
    <div v-else-if="props.mediaType === 'video'">
      <h3 class="text-xl">VIDEO</h3>
      <VideoPlayer :src="source" />
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

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  setPlayerRef: {
    type: Function,
    required: true
  },
  mediaType: {
    type: String as () => MediaType,
    required: true
  }
})
const source = ref<string>()
const emit = defineEmits(['togglePlay'])
const togglePlay = () => emit('togglePlay')
watch(
  () => props.src,
  (newVal) => {
    if (newVal) {
      source.value = newVal
      nextTick(() => {})
    }
  },
  { immediate: true }
)
</script>
