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
      this.citiesList.push(data.name)
    },
  }
})