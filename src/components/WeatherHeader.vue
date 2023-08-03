<script setup lang="ts">
  import iconSettings from '../assets/icons/icon-settings.svg'
  // import iconClose from '../assets/icons/icon-close.svg'
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <p class="m-0 font-custom font-bold text-l text-start">London, UK</p>
    <button type="button">
      <img :src="iconSettings" alt="icon" class="w-7 h-7">
    </button>
  </div>
</template>