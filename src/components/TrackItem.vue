<template>
  <div>
    <a @click="onSelect" :class="itemClass">
      <span :data-song-name="track.url">{{ props.track.title }}</span>
    </a>
    <p>{{ props.track.artist }}</p>
    <p>{{ props.track.album }}</p>
    <p>{{ props.track.year }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { Track } from '@/types/Track'

const props = defineProps({
  track: {
    type: Object as () => Track,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: true
  }
})
// make font bold when item is selected in a computed property
const itemClass = computed(() => {
  return props.isSelected ? 'bold' : 'normal'
})

const emit = defineEmits(['selectedTrack'])
const onSelect = (params: any) => {
  console.log('selected', params.target.getAttribute('data-song-name'))
  emit('selectedTrack', params.target.getAttribute('data-song-name'))
}
</script>
