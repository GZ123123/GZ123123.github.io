<template>
  <div class="text-white">
    <div class="mt-6 md:mt-16">     
      <AppBanner active />
    </div>

    <div class="mt-10 md:mt-18">
      <AppMusic :songs="songs" />
    </div>

    <div class="mt-15 md:mt-44">
      <AppGifts />
    </div>

    <div class="mt-15 md:mt-28">
      <AppCards />
    </div>

    <div class="mt-15 md:mt-32">
      <AppLetter />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TSong } from '~/types';

definePageMeta({
  layout: 'default'
})

const songs = <TSong[]>[]
</script>