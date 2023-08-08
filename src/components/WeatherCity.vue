<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useGlobalStore } from '../../store/store'
  import { PropsWeatherCity } from '../../models'

  import weather from '../assets/icons/weather/broken-clouds.png'
  import iconWindSpeed from '../assets/icons/icon-arrow.png'
  import iconAtmosphericPressure from '../assets/icons/icon-barometer.png'

  // defineProps<PropsWeatherCity>()
  const store = useGlobalStore()
</script>

<template>
  <div class="w-full flex flex-col items-center justify-between">
    <p class="font-custom font-bold text-l text-start self-start">London, UK</p>

    <div class="mt-7 mb-7 flex items-center justify-between">
      <img :src="weather" alt="icon-weather" class="w-24 h-24">
      <span class="ml-7 font-custom font-bold text-4xl">7&deg;С</span>
    </div>

    <div class="w-fill flex flex-col items-center justify-between">
      <span class="mb-3 font-custom text-l text-start">Feels like -3&deg;С. Broken clouds. Light breeze</span>

      <div class="mb-3 w-full flex items-center justify-start">
        <div class="mr-24 flex items-center justify-start">
          <img :src="iconWindSpeed" alt="windSpeed" class="w-4 h-4 rotate-custom">
          <span class="ml-2 font-custom text-l text-start">3.0m/s SSE</span>
        </div>

        <div class="flex items-center justify-start">
          <img :src="iconAtmosphericPressure" alt="windSpeed" class="w-4 h-4">
          <span class="ml-2 font-custom text-l text-start">1021hPa</span>
        </div>
      </div>

      <div class="mb-3 w-full flex items-center justify-start">
        <span class="mr-24 font-custom text-l text-start">Humidity: 97%</span>

        <span class="font-custom text-l text-start">Dew point: 0&deg;C</span>
      </div>

      <div class="mb-20 w-full flex items-center justify-start">
        <span class="font-custom text-l text-start">Visibility: 10.0km</span>
      </div>
    </div>
  </div>
</template>
