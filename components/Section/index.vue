<template>
  <section v-bind="$attrs">
    <template v-if="$props.title">
      <div class="flex justify-center mb-5 md:mb-2">
        <h3 class="flex items-center title text-2xl md:text-[68px] leading-[30px] md:leading-[84px]">{{ $props.title }}</h3>
      </div>
    </template>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  const _props = defineProps<{ title: string }>()
</script>

<style scoped>  
  .title::before,
  .title::after {
    content: '';
    display: inline-block;
		background-image: url('~/assets/icons/star.svg');
		background-size: contain;
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
  }

  .title::before {
		margin-right: 10px;
  }
  
  .title::after {
		margin-left: 10px;
  }

  @media (min-width: 768px) {
    .title::before, .title::after {
      width: 25px;
      height: 25px;
    }
    
    .title::before {
      margin-right: 1rem;
    }
    
    .title::after {
      margin-left: 1rem;
    }
  }
</style>