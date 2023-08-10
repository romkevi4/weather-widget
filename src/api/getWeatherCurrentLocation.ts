import axios from 'axios'
import { IWeatherData } from '../../models'
import { EnumServerUrlInfo } from '@/utils/constants'

export async function getWeatherCurrentLocation(lat: number, lon: number): Promise<IWeatherData> {
  try {
    const response =  await axios.get(`${EnumServerUrlInfo.OPEN_WEATHER}?units=metric&lat=${lat}&lon=${lon}&appid=${EnumServerUrlInfo.API_KEY}`)
    return response.data
  } catch (err) {
    console.error('Ошибка при получении данных: ', err)
    throw err
  }
}