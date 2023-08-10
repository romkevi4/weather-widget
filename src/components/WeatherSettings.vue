<script setup lang="ts">
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  import { useGlobalStore } from '../../store/store'
  import { getWeather } from '@/api/getWeather'
  import { IWeatherData } from '../../models';
  import { saveData } from '@/utils/saveData'

  import iconBurgerMenu from '@/assets/icons/icon-burger-menu.svg'
  import iconDeleteBasket from '@/assets/icons/icon-delete-basket.svg'
  import iconEnterArrow from '@/assets/icons/icon-enter-arrow.svg'

  const store = useGlobalStore()
  const nameTown = ref<string>('')
  const drag = ref<boolean>(false)

  const onAddCity = async () => {
    try {
      const data: IWeatherData = await getWeather(nameTown.value)
      saveData(data)
      nameTown.value = ''
    } catch (err) {
      console.error('Ошибка при получении данных: ', err);
    }
  }

  const onDeleteCity = async (evt: Event) => {
    const { id } = evt.target as HTMLFormElement

    if (id) {
      const indexWeather = store.currentWeatherData.findIndex((obj: IWeatherData) => obj.id === +id)
      const indexCity = store.citiesList.findIndex((str: string) => str === store.currentWeatherData[indexWeather].name)

      if (indexWeather !== -1 && indexCity !== -1) {
        store.currentWeatherData.splice(indexWeather, 1)
        store.citiesList.splice(indexCity, 1)
        localStorage.setItem('citiesList', JSON.stringify(store.citiesList))
      }

      (store.currentWeatherData.length === 0 && store.citiesList.length === 0) && localStorage.removeItem('citiesList')
    }
  }
</script>

<template>
  <div class="w-full flex flex-col items-center justify-between">
    <p class="font-custom font-bold text-l text-start self-start">Settings</p>

    <draggable
      v-model="store.currentWeatherData"
      group="people"
      @start="drag=true"
      @end="drag=false"
      item-key="id"
      class="w-full mt-7 mb-7 flex flex-col items-center justify-between"
    >
      <template #item="{element}">
        <div class="mt-3 pt-2 pb-2 pl-1 pr-1 w-full flex items-center justify-between bg-gray-300 rounded-md">
          <button type="button">
            <img :src="iconBurgerMenu" alt="icon-weather" class="w-6 h-6 cursor-grab">
          </button>
          <span class="ml-3 mr-3 w-full font-custom text-l text-start ">{{ `${element.name}, ${element.sys.country}` }}</span>
          <form :id="element.id" @submit.prevent="onDeleteCity">
            <button type="submit">
              <img :src="iconDeleteBasket" alt="deleteBasket" class="w-6 h-6" >
            </button>
          </form>
        </div>
      </template>>
    </draggable>

    <form class="mb-6 w-full flex flex-col items-start justify-start" @submit.prevent="onAddCity">
      <p class="mb-1 font-custom font-bold text-l text-start self-start">Add location:</p>

      <div class="w-full flex items-center justify-between">
        <input
          name="elementsInput"
          type="text"
          class="mr-3 py-2 px-4 w-full border outline-0 focus:ring-1 focus:ring-blue-500 rounded-md font-Inter"
          id="elementsInput"
          v-model="nameTown"
          placeholder="Enter the name of the city"
        >

        <button type="submit">
          <img :src="iconEnterArrow" alt="icon-enter" class="mr-2 w-8 h-8">
        </button>
      </div>
    </form>
  </div>
</template>