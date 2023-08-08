<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import { useGlobalStore } from '../store/store'
  import { getWeather } from '@/api/getWeather'
  import { IWeatherData } from '../models';

  // import WeatherWidget from './components/WeatherWidget.vue'
  import WeatherCity from './components/WeatherCity.vue'
  import WeatherSettings from './components/WeatherSettings.vue'

  import iconSettings from './assets/icons/icon-settings.svg'
  import iconClose from './assets/icons/icon-close.svg'

  // Вместо false должен прилетать пропс
  const store = useGlobalStore()
  let qq = store.localWeatherData
  console.log(qq)
  let isSettings = ref<boolean>(false)

  onMounted( async () => {
    try {
      const data: IWeatherData = await getWeather('Moscow')
      store.setWeatherData(data)
    } catch (err) {
      console.error('Ошибка при получении данных: ', err);
    }
  })

  const onSettings = () => isSettings.value = !isSettings.value
</script>

<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <section class="m-0 p-3 w-full relative bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 shadow-gray-500 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between items-center">
    <button type="button" @click="onSettings" class="absolute top-2.5 right-2.5">
      <img :src="isSettings ? iconClose : iconSettings " alt="icon" class="w-7 h-7">
    </button>

    <WeatherCity
        v-if="!isSettings"
    />
    <WeatherSettings v-else />
  </section>
</template>

<!--<script>-->
<!--import WeatherInfo from '@/components/WeatherInfo';-->
<!--export default {-->
<!--  components: {WeatherInfo}-->
<!--}-->
<!--</script>-->