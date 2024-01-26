<script setup lang="ts">
import { ref } from 'vue'
import type { Track } from '@/types/Track'
import TrackItem from './components/TrackItem.vue'
import TrackList from './components/TrackList.vue'
import MusicPlayer from './components/MusicPlayer.vue'

const selectedTrack = ref()
const handleTrackSelected = (track: Track) => {
  console.log('currentTrack ', track)
  selectedTrack.value = track
}
</script>

<template>
  <main>
    <MusicPlayer :current-track="selectedTrack" />
    <TrackList>
      <template #default="{ track }">
        <!-- Dynamic component to render track based on track type -->
        <TrackItem :track="track" @selected-track="handleTrackSelected" />
        <!-- <component :is="getComponentForTrackType(track.type)" :track="track" /> -->
      </template>
    </TrackList>
    <!-- <MusicPlayer :current-track="selectedTrack.value" />
    <TrackList @selected-track="handleTrackSelected" /> -->
  </main>
</template>
