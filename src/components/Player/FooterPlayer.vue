<template>
  <footer
    class="dashBorder container mx-auto bg-gray-800 p-4 w-full rounded-md text-white relative overflow-hidden"
  >
    <div class="track-info text-lg font-semibold flex items-center justify-center">
      <slot name="prefix" :icon="footerIcon"> </slot>

      <p v-if="props.title" class="whitespace-nowrap">
        <span> {{ props.title }} </span>
      </p>
      <p v-else>Select a media from the list</p>
    </div>
    <div class="controls mt-4 flex justify-center">
      <slot name="controls" :handlePlay="togglePlay" :handleMute="toggleMute">
        <div class="flex items-center gap-4 justify-center">
          <button class="btn-primary" @click="togglePlay">
            <FontAwesomeIcon :icon="playIcon" />
          </button>
          <button class="btn-primary" @click="toggleMute">
            <FontAwesomeIcon :icon="volumeIcon" />
          </button></div
      ></slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  faVideo,
  faMusic,
  faVolumeMute,
  faVolumeHigh,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { usePlayer } from '@/composables/usePlayer'
const { isPlaying, isMuted, selectedMedia, togglePlay, toggleMute } = usePlayer()

defineSlots<{
  controls?: (props: { handlePlay: () => void; handleMute: () => void }) => any
  prefix?: (props: { icon: any }) => any
}>()
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const playIcon = computed(() => (isPlaying.value ? faPause : faPlay))
const volumeIcon = computed(() => (isMuted.value ? faVolumeMute : faVolumeHigh))
const footerIcon = computed(() => {
  const media = selectedMedia?.value
  return media ? (media.type === 'video' ? faVideo : faMusic) : ''
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
