<script setup lang="ts">
import { ref } from 'vue'
import type { Track } from '@/types/Track'
import TrackItem from './components/TrackItem.vue'
import TrackList from './components/TrackList.vue'
import VideoItem from './components/VideoItem.vue'
import SearchForm from './components/Search/SearchForm.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import type { Video } from './types/Video'
import FooterPlayer from './components/FooterPlayer.vue'
import { usePlayer } from './composables/usePlayer'

const playerRef = ref(null)

const setPlayerRef = (player) => {
  console.log('setPlayerRef ', player.value)
  playerRef.value = player.value
}
const selectedTrack = ref()
const handleTrackSelected = (track: Track) => {
  console.log('currentTrack ', track)
  selectedTrack.value = track
}
function isTrack(item: Track | Video): item is Track {
  return 'artist' in item
}

const getComponentType = (item: Track | Video) => {
  if (isTrack(item)) {
    return TrackItem
  } else {
    return VideoItem
  }
}
const { refState, togglePlay, toggleMute, setVideoElement } = usePlayer()
const { isPlaying } = refState
</script>

<template>
  <main class="container mx-auto mt-10 bg-gray-800 rounded-md shadow-md p-5">
    <section class="flex justify-center">
      <h1 class="text-3xl text-center text-gray-100">Vue Music Player</h1>
    </section>
    <SearchForm />
    <VideoPlayer :setVideoElement="setVideoElement" :src="selectedTrack" @togglePlay="togglePlay" />
    <TrackList>
      <template #default="{ item }">
        <!-- Dynamic component to render track based on track type -->
        <component
          :is="getComponentType(item)"
          :data="item"
          @selected="handleTrackSelected"
          :isSelected="item.url === selectedTrack"
        />
        <!-- <TrackItem :track="track" @selected-track="handleTrackSelected" /> -->
        <!-- <component :is="getComponentForTrackType(track.type)" :track="track" /> -->
      </template>
    </TrackList>
    <!-- <MusicPlayer :current-track="selectedTrack.value" />
    <TrackList @selected-track="handleTrackSelected" /> -->
  </main>
  <FooterPlayer :player="playerRef" :current-track="selectedTrack">
    <template #controls>
      <div class="flex items-center gap-4 justify-center">
        <button class="btn-primary" @click="togglePlay">
          {{ isPlaying ? 'Pause' : 'Play' }}
        </button>
        <button class="btn-primary" @click="toggleMute">Mute/Unmute</button>
      </div>
    </template>
  </FooterPlayer>
</template>
