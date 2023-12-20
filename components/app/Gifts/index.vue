<template>
  <div class="grid grid-cols-3 gap-x-5 md:gap-x-[172px] gap-y-[30px] md:gap-y-[8px]">
    <template v-for="(gift, index) in gifts" :key="index">
      <div class="aspect-square"><Gift :active="gift.isActive" @open="onOpen(index)" /></div>
    </template>
  </div>
</template>

<script lang="ts" setup>

import Gift from './Gift.vue'

const gifts = [
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
  { isActive: false },
]

const onOpen = (index: number) => {

}

</script>
