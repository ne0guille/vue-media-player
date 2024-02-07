<template>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Media } from '../types/Media'
import TrackList from './TrackList.vue'
import { getComponentType } from '../utils/mediaUtils'
import { mockedMediaList } from '@/data/fake-media'

const selectedMedia = ref<Media | undefined>()
const handleTrackSelected = (media: Media) => {
  selectedMedia.value = media
}

const trackList = ref<Media[]>()
const getList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  trackList.value = mockedMediaList
}
await getList()
</script>
