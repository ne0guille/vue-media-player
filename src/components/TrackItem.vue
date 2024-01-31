<template>
  <div
    class="flex flex-col justify-center items-center bg-pink-600 m-4 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
  >
    <a @click="onSelect" class="text-white hover:text-yellow-300" :class="itemClass">
      <span :data-song-name="data.url" class="text-xl font-bold tracking-wider"
        >{{ props.data.title }} - {{ props.data.artist }}</span
      >
    </a>
    <p class="text-sm text-yellow-200 mt-2 italic">
      {{ props.data.album }} - {{ props.data.year }}
    </p>
  </div>
</template>

<!-- <template>
  <div
    class="flex flex-col justify-center items-center bg-white m-4 p-4 rounded-lg shadow hover:bg-blue-200 transition duration-300"
  >
    <a @click="onSelect" class="text-gray-800 hover:text-gray-600">
      <span :data-song-name="data.url" class="font-semibold"
        >{{ props.data.title }} - {{ props.data.artist }}</span
      >
    </a>
    <p class="text-xs text-gray-500 mt-1">{{ props.data.album }} - {{ props.data.year }}</p>
  </div>
</template> -->

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { Track } from '@/types/Track'

const props = defineProps({
  data: {
    type: Object as () => Track,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})
// make font bold when item is selected in a computed property
const itemClass = computed(() => {
  return props.isSelected ? ' text-yellow-300' : ''
})

const emit = defineEmits(['selected'])
const onSelect = (params: any) => {
  console.log('selected', params.target.getAttribute('data-song-name'))
  emit('selected', params.target.getAttribute('data-song-name'))
}
</script>
