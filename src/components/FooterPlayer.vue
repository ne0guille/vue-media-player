<template>
  <footer
    class="dashBorder container mx-auto bg-gray-800 p-4 w-full rounded-md text-white relative overflow-hidden"
  >
    <div class="track-info text-lg font-semibold flex items-center justify-center">
      <FontAwesomeIcon :icon="faVideo" />

      <p v-if="props.title" class="whitespace-nowrap">
        <span> {{ props.title }} </span>
      </p>
      <p v-else>Select a media from the list</p>
    </div>
    <div class="controls mt-4 flex justify-center">
      <slot name="controls"> </slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.marquee {
  display: inline-block;
  padding-left: 90%; /* Space before the text starts */
  animation: marquee 6s linear infinite;
}
.dashBorder {
  border: 4px dashed #7b90b5;
}
</style>
