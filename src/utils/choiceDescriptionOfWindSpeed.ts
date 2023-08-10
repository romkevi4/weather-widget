import { EnumWindDescription } from '@/utils/constants'

export function choiceDescriptionOfWindSpeed(windSpeed: number): string {
	if (windSpeed >= 0 && windSpeed < .3) {
		return EnumWindDescription.CALM

	} else if (windSpeed >= .3 && windSpeed < 1.6) {
		return EnumWindDescription.LIGHT_AIR

	} else if (windSpeed >= 1.6 && windSpeed < 3.4) {
		return EnumWindDescription.LIGHT_BREEZE

	} else if (windSpeed >= 3.4 && windSpeed < 5.5) {
		return EnumWindDescription.GENTLE_BREEZE

	} else if (windSpeed >= 5.5 && windSpeed < 8.0) {
		return EnumWindDescription.MODERATE_BREEZE

	} else if (windSpeed >= 8.0 && windSpeed < 10.8) {
		return EnumWindDescription.FRESH_BREEZE

	} else if (windSpeed >= 10.8 && windSpeed < 13.9) {
		return EnumWindDescription.STRONG_BREEZE

	} else if (windSpeed >= 13.9 && windSpeed < 17.2) {
		return EnumWindDescription.NEAR_GALE

	} else if (windSpeed >= 17.2 && windSpeed < 20.8) {
		return EnumWindDescription.GALE

	} else if (windSpeed >= 20.8 && windSpeed < 24.5) {
		return EnumWindDescription.STRONG_GALE

	} else if (windSpeed >= 24.5 && windSpeed < 28.5) {
		return EnumWindDescription.STORM

	} else if (windSpeed >= 28.5 && windSpeed < 32.7) {
		return EnumWindDescription.VIOLENT_STORM

	} else {
		return EnumWindDescription.HURRICANE
	}
}
