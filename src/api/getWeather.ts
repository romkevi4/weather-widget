import axios from 'axios'
import { EnumServerUrlInfo } from '@/utils/constants'
import { IWeatherData } from '../../models'

export async function getWeather(cityName: string): Promise<IWeatherData> {
  try {
    const response =  await axios.get(`${EnumServerUrlInfo.OPEN_WEATHER}?units=metric&q=${cityName}&appid=${EnumServerUrlInfo.API_KEY}`)
    return response.data
  } catch (err) {
    console.error('Ошибка при получении данных: ', err)
    throw err
  }
}
