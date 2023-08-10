import { IWeatherData } from '../../models'
import { getWeather } from '@/api/getWeather'
import { getWeatherCurrentLocation } from '@/api/getWeatherCurrentLocation'
import { useGlobalStore } from '../../store/store'
import { saveData } from '@/utils/saveData'

export async function setInitialDataCities() {
	const store = useGlobalStore()
	const citiesList = localStorage.getItem('citiesList')

	async function getDataOfCurrentCities(cityName: string) {
		const data: IWeatherData = await getWeather(cityName)
		console.log(data)
		store.setWeatherData(data)
		store.setAddCities(cityName)
	}

	if (citiesList) {
		const citiesListArr = JSON.parse(citiesList)
		citiesListArr.forEach((city: string) => getDataOfCurrentCities(city))
	} else {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const latitude = position.coords.latitude
				const longitude = position.coords.longitude

				const data: IWeatherData = await getWeatherCurrentLocation(latitude, longitude)
				saveData(data)
			},
			async (err) => {
				console.error('Ошибка получения местоположения: ', err)

				const data: IWeatherData = await getWeather('Venice')
				saveData(data)
			}
		)
	}
}