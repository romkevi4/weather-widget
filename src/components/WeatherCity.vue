<script setup lang="ts">
  import { defineProps } from 'vue'

  import weather from '../assets/icons/weather/broken-clouds.png'
  import iconWindSpeed from '../assets/icons/icon-arrow.png'
  import iconBarometer from '../assets/icons/icon-barometer.png'

  interface PropsWeatherCity {
    nameCity: string,
    country: string,
    temp: number,
    feelsLike: number,
    descriptionWeather: string,
    windSpeed: number
    pressure: number,
    humidity:number,
    dewPoint: number,
    visibility: number
  }

  defineProps<PropsWeatherCity>()

  const changeWeatherIcon = (str: string): string => {
    const newStr = str.replace(/ /g, '-').toLowerCase()
    return `../assets/icons/weather/${newStr}.png`
  }

  const changeStr = (str: string): string => {
    return str.replace(/ /g, '-').toLowerCase()
  }
</script>

<template>
  <p class="font-custom font-bold text-l text-start self-start">{{ `${nameCity}, ${country}` }}</p>

  <div class="mt-7 mb-7 flex items-center justify-between">
    <div :style="{ backgroundImage: `url('src/assets/icons/weather/${changeStr(descriptionWeather)}.png')` }" class="w-24 h-24"></div>
    <span class="ml-7 font-custom font-bold text-4xl">{{`${temp}&deg;С`}}</span>
  </div>

  <div class="w-fill flex flex-col items-center justify-between">
    <span class="mb-3 font-custom text-l text-start">{{`Feels like ${feelsLike}&deg;С. ${descriptionWeather}. Light breeze`}}</span>

    <div class="mb-3 w-full flex items-center justify-start">
      <div class="mr-24 flex items-center justify-start">
        <img :src="iconWindSpeed" alt="windSpeed" class="w-4 h-4 rotate-custom">
        <span class="ml-2 font-custom text-l text-start">{{ `${windSpeed}m/s SSE` }}</span>
      </div>

      <div class="flex items-center justify-start">
        <img :src="iconBarometer" alt="windSpeed" class="w-5 h-5">
        <span class="ml-2 font-custom text-l text-start">{{ `${pressure}hPa` }}</span>
      </div>
    </div>

    <div class="mb-3 w-full flex items-center justify-start">
      <span class="mr-24 font-custom text-l text-start">{{ `Humidity: ${humidity}%` }}</span>

      <span class="font-custom text-l text-start">{{ `Dew point: ${dewPoint}&deg;C` }}</span>
    </div>

    <div class="mb-20 w-full flex items-center justify-start">
      <span class="font-custom text-l text-start">{{ `Visibility: ${visibility}km` }}</span>
    </div>
  </div>
</template>
