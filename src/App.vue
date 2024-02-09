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
    <Suspense timeout="0">
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
import { computed } from 'vue'
import MediaList from './components/MediaList.vue'
import SearchForm from './components/Search/SearchForm.vue'
import FooterPlayer from './components/Player/FooterPlayer.vue'
import { usePlayer } from './composables/usePlayer'
import { faVolumeMute, faVolumeHigh, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatFunctions } from './utils/mediaUtils'
import MediaPlayer from './components/Player/MediaPlayer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const { isPlaying, isMuted, togglePlay, toggleMute, setVideoElement, selectedMedia } = usePlayer()
const playIcon = computed(() => (isPlaying.value ? faPause : faPlay))
const volumeIcon = computed(() => (isMuted.value ? faVolumeMute : faVolumeHigh))
const formattedTitle = computed(() => {
  const media = selectedMedia?.value
  return media ? formatFunctions[media.type](media) : 'Select a media to play'
})

const setPlayerRef = (player: HTMLMediaElement) => {
  console.log('Setting player ref', player)
  setVideoElement(player)
}
</script>
