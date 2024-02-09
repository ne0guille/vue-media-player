<!-- problema : usar ref dynamically  -->

<template>
  <div class="audio-player">
    <div v-if="selectedMedia?.type === 'track'">
      <MusicPlayer :track="selectedMedia" :is-muted="isMuted" :set-player="setPlayerElement" />
    </div>

    <div v-else-if="selectedMedia?.type === 'video'">
      <h3 class="text-xl">VIDEO</h3>
      <VideoPlayer
        :src="selectedMedia?.url"
        :set-player="setPlayerElement"
        :is-playing="isPlaying"
        :toggle-play="togglePlay"
      />
    </div>

    <!-- <div class="controls">
      <slot name="controls">
        <button class="p-4 bg-green-300 text-black" @click="emit('togglePlay')">Play Media</button>
      </slot>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import MusicPlayer from './MusicPlayer.vue'
import { usePlayer } from '@/composables/usePlayer'
const { isMuted, selectedMedia, setPlayerElement, togglePlay, isPlaying } = usePlayer()

// TODO ver como forzar los valores MediaType al pasarlos
// const props = defineProps({
//   media: {
//     type: Object as () => Media
//   }
// })

// const emit = defineEmits(['togglePlay'])
</script>
