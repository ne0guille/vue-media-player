<!-- <template>
  <div>
    <img :src="props.data.thumbnail" width="60" height="60" />
    <a @click="onSelect" :class="itemClass">
      <span :data-video-name="data.url">{{ props.data.title }}</span>
    </a>
  </div>
</template> -->
<template>
  <!-- <div
    class="flex items-center bg-blue-100 p-2 rounded-lg shadow-md hover:bg-blue-200 transition duration-300"
  >
    <img :src="props.data.thumbnail" class="w-16 h-16 rounded-full border-2 border-blue-500" />
    <a @click="onSelect" class="ml-3">
      <span :data-video-name="data.url" class="text-blue-800 font-medium text-lg">{{
        props.data.title
      }}</span>
    </a>
  </div> -->
  <div
    class="flex flex-col bg-gradient-to-r from-pink-500 to-yellow-500 p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
  >
    <img
      :src="props.data.thumbnail"
      class="w-24 h-24 rounded-full self-center ring-4 ring-offset-2 ring-indigo-300"
    />
    <a @click="onSelect" class="mt-3">
      <span :data-video-name="data.url" class="text-white text-xl font-bold tracking-wider">{{
        props.data.title
      }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { Video } from '@/types/Video'

const props = defineProps({
  data: {
    type: Object as () => Video,
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

const emit = defineEmits(['selected'])
const onSelect = (params: any) => {
  emit('selected', props.data)
}
</script>
