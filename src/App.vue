<template>
  <main class="container mx-auto mt-10 bg-gray-800 rounded-md shadow-md p-5">
    <section class="flex justify-center">
      <h1 class="text-3xl text-center text-gray-100">Vue Media Player</h1>
    </section>
    <SearchForm />
    <MediaPlayer />
    <Suspense timeout="0">
      <template #default>
        <MediaList />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </main>

  <FooterPlayer>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MediaList from './components/MediaList.vue'
import SearchForm from './components/Search/SearchForm.vue'
import FooterPlayer from './components/Player/FooterPlayer.vue'
import MediaPlayer from './components/Player/MediaPlayer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
</script>
