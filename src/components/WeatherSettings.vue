<script setup lang="ts">
  import { ref } from 'vue'

  import { useGlobalStore } from '../../store/store'
  import { getWeather } from '@/api/getWeather'

  import iconBurgerMenu from '@/assets/icons/icon-burger-menu.svg'
  import iconDeleteBasket from '@/assets/icons/icon-delete-basket.svg'
  import iconEnterArrow from '@/assets/icons/icon-enter-arrow.svg'
  import { IWeatherData } from '../../models';


  const store = useGlobalStore()
  const nameTown = ref<string>()

  const onSubmit = async (evt: Event) => {

    try {
      const data: IWeatherData = await getWeather(nameTown)
      store.setWeatherData(data)
    } catch (err) {
      console.error('Ошибка при получении данных: ', err);
    }
  }
</script>

<template>
  <div class="w-full flex flex-col items-center justify-between">
    <p class="font-custom font-bold text-l text-start self-start">Settings</p>

    <div class="w-full mt-7 mb-7 flex flex-col items-center justify-between">
      <div class="mt-3 pt-2 pb-2 pl-1 pr-1 w-full flex items-center justify-between bg-gray-300 rounded-md">
        <button type="button">
          <img :src="iconBurgerMenu" alt="icon-weather" class="w-6 h-6">
        </button>
        <span class="ml-3 mr-3 w-full font-custom text-l text-start ">London, UK</span>
        <button type="submit">
          <img :src="iconDeleteBasket" alt="deleteBasket" class="w-6 h-6">
        </button>
      </div>
    </div>

    <form class="mb-6 w-full flex flex-col items-start justify-start" @submit.prevent="onSubmit">
      <p class="mb-1 font-custom font-bold text-l text-start self-start">Add location:</p>

      <div class="w-full flex items-center justify-between">
        <input
          name="elementsInput"
          type="text"
          class="mr-3 py-2 px-4 w-full border outline-0 focus:ring-1 focus:ring-blue-500 rounded-md font-Inter"
          id="elementsInput"
          v-model="nameTown"
        >

        <button type="submit">
          <img :src="iconEnterArrow" alt="enter" class="mr-2 w-8 h-8">
        </button>
      </div>
    </form>
  </div>
</template>