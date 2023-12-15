<template>
  <div class="flex flex-col gap-3">
    <div class="banner rounded-xl md:rounded-[20px] h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px]" :style="{
      backgroundImage: `url('${currentBanner}')`
    }">
      <!-- <NuxtImg class="h-full w-full object-cover" :src="currentBanner" alt="music player background" loading="eager" /> -->
    </div>
    <MusicPlayer v-if="songs.length" :song="currentSong" :page="current" @change="handleChangePage" />
  </div>
</template>

<script lang="ts" setup>
  import type { TSong } from '~/types';

  const _props = defineProps<{ songs: TSong[] }>()

  const current = ref(0);

  const currentSong = computed(() => _props.songs[current.value]);

  const currentBanner = computed(() => _props.songs[current.value]?.background ?? '/images/music-background.png')

  const handleChangePage = (page: number) => {
    if (page < 0) {
      return (current.value = _props.songs.length - 1)
    }

    if (page > _props.songs.length - 1) {
      return (current.value = 0)
    }
    
    return current.value = page
  }
</script>

<style>
  .banner {
    border: 5px solid white;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
