<template>
  <div id="layout" class="px-5 md:px-20 pt-40 md:pt-64 mx-auto text-white">

    <div>
      <AppHeader />
    </div>

    <main>
      <slot />
    </main>

    <div>
      <AppFooter/>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>