import { defineStore } from 'pinia'
import { IWeatherData } from '../models';

export const useGlobalStore = defineStore('store', {
  state: () => ({
    localWeatherData: [] as IWeatherData[],
    citiesList: [] as string[]
  }),
  actions: {
    setWeatherData(data: IWeatherData) {
      this.localWeatherData.push(data)
      this.citiesList.push(data.name)
    },


  }
})