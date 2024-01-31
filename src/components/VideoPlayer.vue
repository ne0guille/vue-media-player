<template>
  <div class="video-player">
    <h2>video</h2>
    <video ref="videoElement" :src="videoSource" width="640" height="360">
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <slot name="controls">
        <button @click="togglePlay">Play video</button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, defineProps, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  setPlayerRef: {
    type: Function,
    required: true
  },
  setVideoElement: {
    type: Function,
    required: true
  }
})
const videoSource = ref<any>()
const videoElement = ref<HTMLMediaElement | null>(null)
const emit = defineEmits(['togglePlay'])
const togglePlay = () => emit('togglePlay')
//     const state = reactive({
//   isPlaying: false,
//   currentTime: 0,
//   duration: 0
// })
watch(
  () => props.src,
  (newVal) => {
    if (newVal) {
      videoSource.value = newVal
      nextTick(() => {})
    }
  },
  { immediate: true }
)

onMounted(() => {
  props.setVideoElement(videoElement.value)
})

// onMounted(() => {
//   // Check if videoElement ref is assigned
//   if (videoElement.value) {
//     videoElement.value.onplay = () => {
//       isPlaying.value = true
//     }
//     videoElement.value.onpause = () => {
//       isPlaying.value = false
//     }

//     // You can add more event listeners or logic here
//   }
// // })

// const togglePlay = () => {
//   if (!isPlaying.value) {
//     videoElement.value?.play()
//   } else {
//     videoElement.value?.pause()
//   }

//   isPlaying.value = !isPlaying.value
// }

// const mute = () => {
//   if (!videoElement.value) return
//   videoElement.value.muted = !videoElement.value.muted
// }
</script>
