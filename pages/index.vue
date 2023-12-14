<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="px-5 md:px-20 pt-40 md:pt-64 mx-auto">
    <div>
      <AppHeader />
      
      <AppBanner />
    </div>

    <div>
      <AppMusic />
    </div>

    <div>
      <AppGifts />
    </div>

    <div>
      <AppCards />
    </div>

    <div>
      <AppLetter />
    </div>
  </div>
</template>
