<script setup lang="ts">
  import { ref } from 'vue'
  import iconSettings from '../assets/icons/icon-settings.svg'
  import iconClose from '../assets/icons/icon-close.svg'

  // Вместо false должен прилетать пропс
  let isSettings = ref<boolean>(false)

  const onSettings = () => {
    isSettings.value = !isSettings.value
  }
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <p class="m-0 font-custom font-bold text-l text-start">{{ isSettings ? 'Settings' : 'London, UK' }}</p>
    <button type="button" @click="onSettings">
      <img :src="isSettings ? iconClose : iconSettings " alt="icon" class="w-7 h-7">
    </button>
  </div>
</template>