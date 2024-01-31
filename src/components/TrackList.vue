<!-- <template>
  <div>
    <h1>TrackList</h1>

    <div v-for="track in trackList" :key="track.id">
      <slot :item="track">
        {{ track }}
      </slot>
    </div>
  </div>
</template> -->

<template>
  <ul class="list-none m-4 p-4 bg-gradient-to-br from-green-400 to-purple-600 rounded-xl shadow-lg">
    <li v-for="item in trackList" :key="item.id">
      <slot :item="item">
        <a href="#" class="text-white text-lg font-bold hover:text-green-200">{{ item.title }}</a>
      </slot>
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T">
import { ref, defineEmits } from 'vue'
import type { Track } from '@/types/Track'
import type { Video } from '@/types/Video'

const props = defineProps({
  data: {
    type: Array as () => T[],
    required: false
  }
})
// const getComponentType = (track: Track | Video) => {
//   console.log('track', track)
//   // check if track is Track type or Video type
//   if ('url' in track) {
//     return 'TrackItem'
//   } else {
//     return 'TrackItem'
//   }
// }
const trackList = ref<any[]>([
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
  },
  // add new item of Video type
  {
    id: 4,
    title: 'Video 1',
    thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg',
    url: '/nieve.mp4'
  }
])
</script>

<!-- <template>
    <div v-for="track in trackList" :key="track.id">
      <component :is="getComponentType(track)" :track="track">
        <template #default="slotProps">
          {{ slotProps.track }}
        </template>
      </component>
  </div>
</template>
 -->
