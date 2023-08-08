import { ref } from 'vue'
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
    },

    // setFilteredData(name: string) {
    //   name
    //     ? this.filteredData = this.initialData.filter((item: Iitems) => item.name.includes(name))
    //     : this.filteredData = this.initialData
    // },
    // setCurrentId(id: string) {
    //   this.currentId = id
    // }
  }
})