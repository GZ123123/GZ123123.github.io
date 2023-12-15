<template>
  <div class="flex flex-col gap-3">
    <div class="lyric flex flex-col gap-2">
      <div class="title"></div>
      <div class="content"></div>
    </div>
    <div class="control flex flex-col gap-3">
      <div class="proccessing"></div>
      <div class="flex flex-row justify-between">
        <div class="timeline start">00:00</div>
        <div>
          <div class="prev" @click="handlePrev"></div>
          <div class="pause"></div>
          <div class="next" @click="handleNext"></div>
        </div>
        <div class="timeline end">04:00</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TSong } from '@/types';

  const _props = defineProps<{ song: TSong, page: number }>()

  const _emit = defineEmits<{ (e: 'change', page: number): void }>()

  const handlePrev = () => _emit('change', _props.page - 1)
  
  const handleNext = () => _emit('change', _props.page + 1)
  
</script>

<style lang="scss" scoped>
  
</style>