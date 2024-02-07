<template>
  <main class="container mx-auto mt-10 bg-gray-800 rounded-md shadow-md p-5">
    <section class="flex justify-center">
      <h1 class="text-3xl text-center text-gray-100">Vue Media Player</h1>
    </section>
    <SearchForm />

    <MediaPlayer
      :mediaType="selectedMedia?.type"
      :src="selectedMedia?.url"
      :setPlayerRef="setPlayerRef"
      @toggle-play="togglePlay"
    />
    <Suspense @pending="pending" @fallback="fallback" @resolve="resolve" timeout="0">
      <template #default>
        <MediaList />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </main>

  <FooterPlayer :title="formattedTitle">
    <template #controls>
      <div class="flex items-center gap-4 justify-center">
        <button class="btn-primary" @click="togglePlay">
          <FontAwesomeIcon :icon="playIcon" />
        </button>
        <button class="btn-primary" @click="toggleMute">
          <FontAwesomeIcon :icon="volumeIcon" />
        </button>
      </div>
    </template>
  </FooterPlayer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Media } from './types/Media'
import MediaList from './components/MediaList.vue'
import SearchForm from './components/Search/SearchForm.vue'
import FooterPlayer from './components/FooterPlayer.vue'
import { usePlayer } from './composables/usePlayer'
import { faVolumeMute, faVolumeHigh, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatFunctions, getComponentType } from './utils/mediaUtils'
import { mediaList } from '@/data/fake-media'
import MediaPlayer from './components/MediaPlayer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
// const trackList = ref<Media[]>()
// const getList = async () => {
//   console.log('Getting list...')
//   await new Promise((resolve) => setTimeout(resolve, 2000))
//   console.log('Got list!')
//   trackList.value = mediaList
// }

// onMounted(async () => {
//   await getList()
// })

const fallback = () => {
  console.log('Fallback...')
}
const pending = () => {
  console.log('Pending...')
}
const resolve = () => {
  console.log('Resolved!')
}

const { isPlaying, isMuted, togglePlay, toggleMute, setVideoElement } = usePlayer()
const playIcon = computed(() => (isPlaying.value ? faPause : faPlay))
const volumeIcon = computed(() => (isMuted.value ? faVolumeMute : faVolumeHigh))
const setPlayerRef = (player: HTMLMediaElement) => {
  console.log('Setting player ref', player)
  setVideoElement(player)
}
const selectedMedia = ref<Media | undefined>()
const formattedTitle = computed(() => {
  const media = selectedMedia.value
  if (!media) {
    return 'Select a media to play'
  }

  const formatter = formatFunctions[media.type]
  return formatter(media)
})
</script>
