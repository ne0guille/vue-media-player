<template>
  <section
    class="music-player bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-xl text-white"
  >
    <h1 class="text-3xl font-bold text-center mb-4 glow">MUSIIIIICCCCCC</h1>
    <div v-if="track" class="flex flex-col items-center justify-center w-full mb-4">
      <img
        :src="track.image || DEFAULT_IMG"
        class="w-64 h-40 object-cover rounded-lg shadow-2xl mb-4"
      />
      <audio v-media-ref="setPlayer" :src="track.url" :muted="isMuted"></audio>
    </div>
    <div class="text-center text-lg">
      <p class="glow">Album: {{ props.track.album }} - {{ props.track.year }}</p>
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
