import { mockedMediaList } from '@/data/fake-media'
import type { Media } from '@/types/Media'
import { ref, reactive, toRefs, readonly, type Ref } from 'vue'

// Type definition for player properties
interface PlayerProps {
  isPlaying: boolean
  isMuted: boolean
  currentTime: number
  duration: number
  videoRef?: HTMLMediaElement | null
  selectedMedia?: Media | null
}
const player = ref<HTMLMediaElement | null>(null)
const state = reactive<PlayerProps>({
  isPlaying: false,
  isMuted: false,
  currentTime: 0,
  duration: 0,
  selectedMedia: undefined
})

export function usePlayer() {
  const setVideoElement = (element: HTMLMediaElement | null) => {
    player.value = element
    resetPlayer()
  }

  const resetPlayer = () => {
    state.isPlaying = false
    state.isMuted = false
    state.currentTime = 0
    state.duration = 0
  }

  const togglePlay = () => {
    if (!player.value || !player.value.src?.length) return
    console.log('togglePlay', player.value.src)
    if (state.isPlaying) {
      player.value.pause()
    } else {
      player.value.play()
    }
    state.isPlaying = !state.isPlaying
  }
  const toggleMute = () => {
    if (!player.value) return

    player.value.muted = !player.value.muted
    state.isMuted = player.value.muted
  }

  const loadTrack = (media: Media) => {
    state.selectedMedia = media
  }

  return { player, ...toRefs(state), togglePlay, toggleMute, loadTrack, setVideoElement }
}
