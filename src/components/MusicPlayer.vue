<template>
  <div class="music-player">
    <h1>MUSIIIIICCCCCC</h1>
    <audio
      ref="audioPlayer"
      :src="audioSource"
      @ended="onTrackEnd"
      :muted="muted"
      @timeupdate="onTimeUpdate"
    ></audio>
    <div class="controls">
      <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <button @click="toogleMuted">{{ muted ? 'Unmute' : 'Mute' }}</button>

      <!-- Add more controls as needed -->
    </div>
    <!-- Displaying current track info -->
    <div class="track-info">
      <p>currentTrack {{ props.currentTrack }}</p>
      <h2>audioSource {{ audioSource }}</h2>
      <!-- Add more info like artist, duration, etc. -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import type { Track } from '@/types/Track'
const props = defineProps({
  currentTrack: {
    type: Object as () => Track,
    required: true
  }
})

const isPlaying = ref(false)
const audioSource = ref('')
const audioPlayer = ref<HTMLMediaElement>()
const muted = ref(false)
const onTimeUpdate = () => {
  console.log('time updated')
}

watch(
  () => props.currentTrack,
  (newVal, oldVal) => {
    if (newVal) {
      console.log('new track', newVal)
      audioSource.value = newVal
      nextTick(() => {
        audioPlayer.value?.play()
        isPlaying.value = true
      })
    }
  }
)
// implem,ent on volume change
const onvolumechange = () => {
  console.log('volume changed')
}

// const test = () => {
//   console.log('loaded')
//   nextTick(() => {
//     audioPlayer.value?.play()
//   })
// }
// onMounted(() => {
//   //@ts-ignore
//   audioPlayer.value?.play()
// })
const toogleMuted = () => {
  muted.value = !muted.value
}

const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value?.pause()
  } else {
    audioPlayer.value?.play()
  }
  isPlaying.value = !isPlaying.value
}
const onTrackEnd = () => {
  console.log('Track ended')
  isPlaying.value = false
}
</script>
