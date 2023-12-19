<template>
  <div class="grid grid-cols-3 gap-x-5 md:gap-x-[172px] gap-y-[30px] md:gap-y-[8px]">
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift active @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
    <div class="aspect-square"><Gift @open="onOpen" /></div>
  </div>
</template>

<script lang="ts" setup>

import Gift from './Gift.vue'

const onOpen = () => {

}

</script>
