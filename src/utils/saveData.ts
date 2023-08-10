import { IWeatherData } from '../../models'
import { useGlobalStore } from '../../store/store'

export function saveData(data: IWeatherData): void {
	const store = useGlobalStore()
	store.setWeatherData(data)
	store.setAddCities(data.name)
	localStorage.setItem('citiesList', JSON.stringify(store.citiesList))
}