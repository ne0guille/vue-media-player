<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
const audioRef = ref<HTMLMediaElement>()
const state = reactive({
  isPlaying: false,
  currentTime: 0,
  duration: 0
})
const play = () => {
  if (audioRef.value) {
    audioRef.value.play()
  }
}

// Method to pause the audio
const pause = () => {
  if (audioRef.value) {
    audioRef.value.pause()
  }
}

// Method to load a new track
const loadTrack = (src) => {
  if (audioRef.value) {
    audioRef.value.src = src
    audioRef.value.load()
  }
}

// Event handlers to update the player state
const onTimeUpdate = () => {
  console.log('onTimeUpdate', audioRef.value?.currentTime)
  state.currentTime = audioRef.value?.currentTime || 0
}

// Lifecycle hooks to add and remove event listeners
onMounted(() => {
  audioRef.value?.addEventListener('timeupdate', onTimeUpdate)
})

onUnmounted(() => {
  audioRef.value?.removeEventListener('timeupdate', onTimeUpdate)
})
</script>
