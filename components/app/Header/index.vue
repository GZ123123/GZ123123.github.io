<template>
  <header id="app-header" class="relative mx-auto w-fit">
    <div id="title" class="hidden md:block text-right text-white">
      <h1>Merry Christmas</h1>
      <span>gift love for u</span>
    </div>

    <div id="title-mobile" class="block md:hidden">
      <Title />
    </div>

    <div id="star"></div>
  </header>
</template>

<script lang="ts" setup>
import Title from './title.vue';
</script>

<style scoped>
  #title {
    padding-right: 34px;
  }

  #title h1 {
    font-family: MC;
    font-size: 183.64px;
    line-height: 183.64px;
  }

  #title span {
    position: relative;
    font-size: 50px;
    line-height: 61.3px;
    
  }
  
  #title span::before, #title span::after {
    content: '';
    position: absolute;
    bottom: 12px;
    padding: 14px;
    border-bottom: 4px solid #fff;
  }

  #title span::before {
    left: calc(-15px - 28px);
  }

  #title span::after {
    right:  calc(-15px - 28px);
  }

  #star {
    position: absolute;
    right: 4%;
    top: 17%;
  }

  #star::after {
    content: '';
    display: block;
    background: url(~/assets/icons/star.svg) no-repeat center/contain;
    width: 15px;
    height: 15px;
  }

  @media (min-width: 768px) {
    #star::after {
      width: 42px;
      height: 42px;
    } 
  }
</style>