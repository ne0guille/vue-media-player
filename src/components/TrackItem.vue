<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-purple-600 m-4 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
  >
    <a @click="onSelect" class="text-white" :class="itemClass">
      <span :data-song-name="data.url" class="hover:text-pink-300 text-xl font-bold tracking-wider"
        >{{ props.data.title }} - {{ props.data.artist }}</span
      >
    </a>
    <p class="text-sm text-yellow-200 mt-2 italic">
      {{ props.data.album }} - {{ props.data.year }}
    </p>
  </div>
</template>

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

const itemClass = computed(() => {
  return props.isSelected ? '  glow-text' : ''
})

const emit = defineEmits(['selected'])
const onSelect = (params: any) => {
  emit('selected', props.data)
}
</script>
