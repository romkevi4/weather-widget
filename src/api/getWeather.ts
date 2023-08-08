import axios from 'axios'
import { OPEN_WEATHER, API_KEY } from '@/utils/resources'
import { IWeatherData } from '../../models'

export async function getWeather(cityName: string): Promise<IWeatherData> {
  try {
    const response =  await axios.get(`${OPEN_WEATHER}?units=metric&q=${cityName}&appid=${API_KEY}`)
    return response.data
  } catch (err) {
    console.error('Ошибка при получении данных: ', err)
    throw err
  }
}
