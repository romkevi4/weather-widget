<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import { useGlobalStore } from '../store/store'
  import { getWeather } from '@/api/getWeather'
  import { IWeatherData } from '../models'
  import correctText from '@/utils/correctText';

  import WeatherCity from './components/WeatherCity.vue'
  import WeatherSettings from './components/WeatherSettings.vue'

  import iconSettings from './assets/icons/icon-settings.svg'
  import iconClose from './assets/icons/icon-close.svg'

  // Вместо false должен прилетать пропс
  const store = useGlobalStore()
  let currentArrWithWeatherData = store.currentWeatherData
  let isSettings = ref<boolean>(false)

  onMounted( async () => {
    try {
      const data: IWeatherData = await getWeather('Moscow')
      store.setWeatherData(data)
    } catch (err) {
      console.error('Ошибка при получении данных: ', err);
    }
  })

  function calculateDewPoint(temperature: number, humidity: number): number {
    const a = 17.27;
    const b = 237.7;

    const alpha = (a * temperature) / (b + temperature) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);

    return +dewPoint.toFixed(0);
  }

  const onSettings = () => isSettings.value = !isSettings.value
</script>

<template>
  <section class="m-0 p-3 w-full min-h-custom relative bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 shadow-gray-500 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between items-center">
    <button type="button" @click="onSettings" class="absolute top-2.5 right-2.5">
      <img :src="isSettings ? iconClose : iconSettings " alt="icon" class="w-7 h-7">
    </button>

    <div class="w-full flex flex-col items-center justify-between" v-if="!isSettings">
      <WeatherCity
        v-for="(cityObj, index) in currentArrWithWeatherData"
        :key="index"
        :name-city="correctText(cityObj.name)"
        :country="cityObj.sys.country.toUpperCase()"
        :temp="Math.round(cityObj.main.temp)"
        :feels-like="Math.round(cityObj.main.feels_like)"
        :description-weather="correctText(cityObj.weather[0].description)"
        :wind-speed="+cityObj.wind.speed.toFixed(1)"
        :pressure="cityObj.main.pressure"
        :humidity="cityObj.main.humidity"
        :dew-point="calculateDewPoint(cityObj.main.temp, cityObj.main.humidity)"
        :visibility="+(cityObj.visibility/1000).toFixed(1)"
      />
    </div>

    <WeatherSettings v-else />
  </section>
</template>
