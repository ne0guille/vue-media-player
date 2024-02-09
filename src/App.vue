<template>
  <main class="container mx-auto mt-10 bg-gray-800 rounded-md shadow-md p-5">
    <section class="flex justify-center">
      <h1 class="text-3xl text-center text-gray-100">Vue Media Player</h1>
    </section>
    <SearchForm />
    <MediaPlayer
      :mediaType="selectedMedia?.type"
      :src="selectedMedia?.url"
      :setPlayerRef="setVideoElement"
      @toggle-play="togglePlay"
    />
    <Suspense timeout="0">
      <template #default>
        <MediaList />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </main>

  <FooterPlayer :title="formattedTitle">
    <template #prefix="{ icon }">
      <FontAwesomeIcon class="mx-2" :icon="icon" />
    </template>
    <!-- <template #controls="{ handlePlay, handleMute }">
      <div class="flex items-center gap-4 justify-center">
        <button class="btn-primary" @click="handlePlay">Click</button>
        <button class="btn-primary" @click="handleMute">Clask</button>
      </div>
    </template> -->
  </FooterPlayer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MediaList from './components/MediaList.vue'
import SearchForm from './components/Search/SearchForm.vue'
import FooterPlayer from './components/Player/FooterPlayer.vue'
import { usePlayer } from './composables/usePlayer'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatFunctions } from './utils/mediaUtils'
import MediaPlayer from './components/Player/MediaPlayer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const { togglePlay, setVideoElement, selectedMedia } = usePlayer()

const formattedTitle = computed(() => {
  const media = selectedMedia?.value
  return media ? formatFunctions[media.type](media) : 'Select a media to play'
})
</script>
