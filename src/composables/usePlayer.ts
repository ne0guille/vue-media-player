import { ref, reactive, toRefs, onMounted, onUnmounted, type Ref } from 'vue'

// Type definition for player properties
interface PlayerProps {
  isPlaying: boolean
  isMuted: boolean
  currentTime: number
  duration: number
  videoRef?: HTMLMediaElement | null
}
const player = ref<HTMLMediaElement | null>(null)
// let player: ref<Html()
const state = reactive<PlayerProps>({
  isPlaying: false,
  isMuted: false,
  currentTime: 0,
  duration: 0
})

export function usePlayer() {
  const setVideoElement = (element: HTMLMediaElement | null) => {
    console.log('setVideoElement', element)
    player.value = element
    resetPlayer()
  }

  const resetPlayer = () => {
    state.isPlaying = false
    state.isMuted = false
    state.currentTime = 0
    state.duration = 0
  }

  // Toggles play and pause
  const togglePlay = () => {
    if (!player.value || !player.value.src?.length) return
    console.log('togglePlay', player.value.src)
    debugger
    if (state.isPlaying) {
      player.value.pause()
    } else {
      player.value.play()
    }
    state.isPlaying = !state.isPlaying
    console.log('isPlaying', state.isPlaying)
  }

  // Toggles mute and unmute
  const toggleMute = () => {
    if (!player.value) return

    player.value.muted = !player.value.muted
    state.isMuted = player.value.muted
  }

  // Loads a new track
  const loadTrack = (src: string) => {
    if (player.value) {
      player.value.src = src
      player.value.load()
    }
  }

  // Updates current time
  const updateTime = () => {
    state.currentTime = player.value?.currentTime ?? 0
  }

  // // Adds event listeners
  // const setupEventListeners = () => {
  //   if (!player?.value) return
  //   console.log('setupEventListeners', player.value)
  //   player.value?.addEventListener('timeupdate', updateTime)
  // }

  // // Removes event listeners
  // const removeEventListeners = () => {
  //   if (!player.value) return
  //   player.value?.removeEventListener('timeupdate', updateTime)
  // }

  // onMounted(setupEventListeners)
  // onUnmounted(removeEventListeners)

  const refState = toRefs(state)
  return { player, ...refState, togglePlay, toggleMute, loadTrack, setVideoElement }
}
