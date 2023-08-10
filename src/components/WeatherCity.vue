<script setup lang="ts">
  import { defineProps, reactive } from 'vue'

  import iconWindSpeed from '@/assets/icons/icon-arrow.png'
  import iconBarometer from '@/assets/icons/icon-barometer.png'

  import { changeWeatherIcon } from '@/utils/changeWeatherIcon'
  import { choiceWindDirection } from '@/utils/choiceWindDirection'
  import { choiceDescriptionOfWindSpeed } from '@/utils/choiceDescriptionOfWindSpeed'

  interface PropsWeatherCity {
    nameCity: string,
    country: string,
    temp: number,
    feelsLike: number,
    descriptionWeather: string,
    windSpeed: number
    windDeg: number
    pressure: number,
    humidity:number,
    dewPoint: number,
    visibility: number
  }

  const props = defineProps<PropsWeatherCity>()

  const styleObject = reactive({
    transform: `rotate(${props.windDeg - 90}deg)`
  })
</script>

<template>
  <p class="font-custom font-bold text-l text-start self-start">{{ `${nameCity}, ${country}` }}</p>

  <div class="mt-7 mb-7 flex items-center justify-between">
    <img :src="changeWeatherIcon(descriptionWeather)" alt="icon-weather" class="w-24 h-24">
    <span class="ml-7 font-custom font-bold text-4xl">{{`${temp}&deg;С`}}</span>
  </div>

  <div class="w-full flex flex-col items-center justify-start">
    <span class="mb-3 w-full font-custom text-l text-start">{{`Feels like ${feelsLike}&deg;С. ${descriptionWeather}. ${choiceDescriptionOfWindSpeed(windSpeed)}`}}</span>

    <div class="mb-12 w-full flex items-start justify-between">
      <div class="mr-16 w-1/2 flex flex-col items-start justify-start">
        <div class="mb-3 w-full flex items-center justify-start">
          <img :src="iconWindSpeed" alt="windSpeed" class="w-4 h-4" :style="styleObject">
          <span class="ml-2 font-custom text-l text-start">{{ `${windSpeed}m/s ${choiceWindDirection(windDeg)}` }}</span>
        </div>
        <span class="mb-3 w-full font-custom text-l text-start">{{ `Humidity: ${humidity}%` }}</span>
        <span class="mb-3 w-full font-custom text-l text-start">{{ `Visibility: ${visibility.toFixed(1)}km` }}</span>
      </div>

      <div class="w-1/2 flex flex-col items-start justify-start">
        <div class="mb-3 w-full flex items-center justify-start">
          <img :src="iconBarometer" alt="windSpeed" class="w-5 h-5">
          <span class="ml-2 font-custom text-l text-start">{{ `${pressure}hPa` }}</span>
        </div>
        <span class="mb-3 w-full font-custom text-l text-start">{{ `Dew point: ${dewPoint}&deg;C` }}</span>
      </div>
    </div>
  </div>
</template>
