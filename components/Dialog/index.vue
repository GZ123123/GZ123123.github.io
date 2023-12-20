
<template>
  <div class="anchor w-full h-full flex justify-center items-center" @click="active = true">
    <slot />
  </div>
  <Teleport v-if="active" to="body">
    <div class="modal-container" @click="active = false">
      <div class="modal" @click.stop></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  const active = ref<boolean>(false);

  watch(active, (isActive) => {
    if(isActive) {
      return document.body.classList.add('show-modal');
    } 
    return document.body.classList.remove('show-modal');
  })
</script>

<style scoped>

</style>