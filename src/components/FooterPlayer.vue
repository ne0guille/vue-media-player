<template>
  <footer class="container m-auto bg-black p-4 w-full">
    <div class="track-info">
      <p v-if="props.currentTrack">{{ props.currentTrack }}</p>
      <p v-else>Select a media from the list</p>
      <!-- Add more info like artist, duration, etc. -->
    </div>
    <div class="bg-black p-4 controls">
      <slot name="controls"> </slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { watch, ref, type Ref } from 'vue'
import type { Track } from '@/types/Track'
const props = defineProps({
  currentTrack: {
    type: Object as () => Track,
    required: true
  },
  player: {
    type: Object as () => Ref<HTMLMediaElement>,
    required: true
  }
})

// const playerRef = ref(props.player)

// watch(
//   () => props.player,
//   (newVal) => {
//     console.log('player changed', newVal)
//     playerRef.value = newVal.value
//   }
// )
// use composable functions to handle play/pause and mute/unmute
</script>
