<template>
  <section class="music-player">
    <h1>MUSIIIIICCCCCC</h1>
    <div v-if="track" class="flex justify-center w-full">
      <img class="rounded-full" :src="track.image || DEFAULT_IMG" width="250" height="160" />
      <audio v-media-ref="setPlayer" :src="track.url" :muted="isMuted"></audio>
    </div>
    <div class="flex justify-center text-lg text-pink-500">
      <p>Album: {{ props.track.album }} - {{ props.track.year }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Track } from '@/types/Track'
import { DEFAULT_IMG } from '@/utils/constants'

const props = defineProps({
  track: {
    type: Object as () => Track,
    required: true
  },
  setPlayer: {
    type: Function,
    required: true
  },
  isMuted: {
    type: Boolean,
    default: false
  }
})
</script>
