import { EnumDirectionWind } from '@/utils/constants'

export function choiceWindDirection(deg: number): string {
	if (deg >= 0 && deg < 22.5) {
		return EnumDirectionWind.N

	} else if (deg >= 22.5 && deg < 45) {
		return EnumDirectionWind.NNE

	} else if (deg >= 45 && deg < 67.5) {
		return EnumDirectionWind.NE

	} else if (deg >= 67.5 && deg < 90) {
		return EnumDirectionWind.ENE

	} else if (deg >= 90 && deg < 112.5) {
		return EnumDirectionWind.E

	} else if (deg >= 112.5 && deg < 135) {
		return EnumDirectionWind.ESE

	} else if (deg >= 135 && deg < 157.5) {
		return EnumDirectionWind.SE

	} else if (deg >= 157.5 && deg < 180) {
		return EnumDirectionWind.SSE

	} else if (deg >= 180 && deg < 202.5) {
		return EnumDirectionWind.S

	} else if (deg >= 202.5 && deg < 225) {
		return EnumDirectionWind.SSW

	} else if (deg >= 225 && deg < 247.5) {
		return EnumDirectionWind.SW

	} else if (deg >= 247.5 && deg < 270) {
		return EnumDirectionWind.WSW

	} else if (deg >= 270 && deg < 292.5) {
		return EnumDirectionWind.W

	} else if (deg >= 292.5 && deg < 315) {
		return EnumDirectionWind.WNW

	} else if (deg >= 315 && deg < 337.5) {
		return EnumDirectionWind.NW

	} else {
		return EnumDirectionWind.NNW
	}
}
