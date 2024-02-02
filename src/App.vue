<template>
  <main class="container mx-auto mt-10 bg-gray-800 rounded-md shadow-md p-5">
    <section class="flex justify-center">
      <h1 class="text-3xl text-center text-gray-100">Vue Media Player</h1>
    </section>
    <SearchForm />
    <VideoPlayer
      :setVideoElement="setVideoElement"
      :src="selectedMedia?.url"
      @togglePlay="togglePlay"
    />
    <TrackList :data="trackList">
      <template #default="{ item }">
        <component
          :is="getComponentType(item)"
          :data="item"
          @selected="handleTrackSelected"
          :isSelected="item.url === selectedMedia?.url"
        />
      </template>
    </TrackList>
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
import { ref, computed, onMounted, type DefineComponent } from 'vue'
import type { Media, MediaType } from './types/Media'
import TrackList from './components/TrackList.vue'
import SearchForm from './components/Search/SearchForm.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import FooterPlayer from './components/FooterPlayer.vue'
import { usePlayer } from './composables/usePlayer'
import { faVolumeMute, faVolumeHigh, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatFunctions, getComponentType } from './utils/mediaUtils'
import { mediaList } from '@/data/fake-media'

const trackList = ref<Media[]>()

onMounted(() => {
  setTimeout(() => {
    trackList.value = mediaList
  }, 1000)
})

const { isPlaying, isMuted, togglePlay, toggleMute, setVideoElement } = usePlayer()
const playIcon = computed(() => (isPlaying.value ? faPause : faPlay))
const volumeIcon = computed(() => (isMuted.value ? faVolumeMute : faVolumeHigh))

const selectedMedia = ref<Media | undefined>()
const handleTrackSelected = (media: Media) => {
  selectedMedia.value = media
}
const formattedTitle = computed(() => {
  const media = selectedMedia.value
  if (!media) {
    return 'Select a media to play'
  }

  const formatter = formatFunctions[media.type]
  return formatter(media)
})
</script>
