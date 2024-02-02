<template>
  <ul class="list-none m-4 p-4 bg-gray-700 rounded-xl shadow-lg">
    <li v-for="item in props.data" :key="item.id">
      <slot :item="item"> {{ item }} </slot>
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T extends Media">
import { type Media } from '@/types/Media'

const props = defineProps({
  data: {
    type: Array as () => T[],
    required: false
  }
})
</script>
