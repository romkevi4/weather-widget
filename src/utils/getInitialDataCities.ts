import { IWeatherData } from '../../models'
import { getWeather } from '@/api/getWeather'
import { useGlobalStore } from '../../store/store'

export async function getInitialDataCities() {
	const store = useGlobalStore()
	const citiesList = localStorage.getItem('citiesList')

	async function getDataOfCurrentCities(cityName: string) {
		const data: IWeatherData = await getWeather(cityName)
		store.setWeatherData(data)
		store.setAddCities(cityName)
	}

	if (citiesList) {
		const citiesListArr = JSON.parse(citiesList)
		citiesListArr.forEach((city: string) => getDataOfCurrentCities(city))
	} else {
		const data: IWeatherData = await getWeather('Venice')
		store.setWeatherData(data)
		store.setAddCities(data.name)
		localStorage.setItem('citiesList', JSON.stringify(store.citiesList))
	}
}