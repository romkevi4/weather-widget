import brokenClouds from '@/assets/icons/weather/broken-clouds.png'
import clearSky from '@/assets/icons/weather/clear-sky.png'
import drizzle from '@/assets/icons/weather/drizzle.png'
import fewClouds from '@/assets/icons/weather/few-clouds.png'
import haze from '@/assets/icons/weather/haze.png'
import heavyIntensityRain from '@/assets/icons/weather/heavy-intensity-rain.png'
import lightIntensityShowerRain from '@/assets/icons/weather/light-intensity-shower-rain.png'
import lightRain from '@/assets/icons/weather/light-rain.png'
import lightSnow from '@/assets/icons/weather/light-snow.png'
import mist from '@/assets/icons/weather/mist.png'
import moderateRain from '@/assets/icons/weather/moderate-rain.png'
import overcastClouds from '@/assets/icons/weather/overcast-clouds.png'
import rain from '@/assets/icons/weather/rain.png'
import scatteredClouds from '@/assets/icons/weather/scattered-clouds.png'
import snow from '@/assets/icons/weather/snow.png'
import thunderstorm from '@/assets/icons/weather/thunderstorm.png'
import iconUnknown from '@/assets/icons/icon-unknown.svg'


export function changeWeatherIcon(str: string | undefined): string | undefined {
	if (str) {
		const newStr: string = str.replace(/ /g, '-').toLowerCase();

		const weather: Record<string, string> = {
			brokenClouds,
			clearSky,
			drizzle,
			fewClouds,
			haze,
			heavyIntensityRain,
			lightIntensityShowerRain,
			lightRain,
			lightSnow,
			mist,
			moderateRain,
			overcastClouds,
			rain,
			scatteredClouds,
			snow,
			thunderstorm,
		}

		for (const key in weather) {
			const value = weather[key];
			if (value.includes(newStr)) {
				return value
			}
		}

		return iconUnknown
	} else {
		return iconUnknown
	}
}