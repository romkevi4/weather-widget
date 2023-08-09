import { defineStore } from 'pinia'
import { IWeatherData } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentWeatherData: [] as IWeatherData[],
    citiesList: [] as string[]
  }),
  actions: {
    setWeatherData(data: IWeatherData) {
      this.currentWeatherData.push(data)
    },
    setAddCities(city: string) {
      this.citiesList.push(city)
    }
  }
})