<template>
  <div>
    <h1>TrackList</h1>

    <!-- loop tacklist and display items -->
    <div v-for="track in trackList" :key="track.id">
      <slot :track="track">
        {{ track }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import type { Track } from '@/types/Track'

const trackList = ref<Track[]>([
  {
    id: 1,
    title: 'Saudades',
    artist: 'Duda Nunes',
    album: 'Album 1',
    year: 2021,
    url: '/Duda_Nunes-Saudades.mp3'
  },
  {
    id: 2,
    title: 'O que a gente tem',
    artist: 'Banda do Vento',
    album: 'Album 2',
    year: 2021,
    url: '/Banda_do_Vento-O_que_a_gente_tem.mp3'
  },
  {
    id: 3,
    title: 'In the Summer',
    artist: 'Maiya',
    album: 'Album 3',
    year: 2021,
    url: '/Maiya_-_In_the_Summer.mp3'
  }
])
</script>
