<script setup lang="ts">
  import weather from '../assets/icons/weather/broken-clouds.png'
</script>

<template>
  <div class="pt-2 w-full flex flex-col items-center justify-between">
    <div class="w-fill flex items-center justify-between">
      <img :src="weather" alt="icon-weather" class="w-24 h-24">
      <span class="ml-7 font-custom font-bold text-4xl">7&deg;С</span>
    </div>

    <div>
      <p>Feels like -3&deg;С. Broken clouds. Light breeze</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>