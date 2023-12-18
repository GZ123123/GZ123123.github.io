<template>
  <div class="text-white">
    <Section class="mt-6 md:mt-16">     
      <AppBanner active />
    </Section>

    <Section class="mt-10 md:mt-18">
      <AppMusic :songs="songs" />
    </Section>

    <Section title="Gift love for u" class="mt-15 md:mt-44">
      <AppGifts />
    </Section>

    <Section title="Xmas symbols mean?" class="mt-15 md:mt-28 px-[25px]">
      <AppCards />
    </Section>

    <Section title="Write best wishes" class="mt-15 md:mt-32 px-[25px]">
      <AppLetter />
    </Section>
  </div>
</template>

<script setup lang="ts">
import type { TSong } from '~/types';

definePageMeta({
  layout: 'default'
})

const songs = <TSong[]>[]
</script>