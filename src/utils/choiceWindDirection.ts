export function choiceWindDirection(deg: number): string {
	if (deg >= 0 && deg < 22.5) {
		return 'N'
	} else if (deg >= 22.5 && deg < 45) {
		return 'NNE'
	} else if (deg >= 45 && deg < 67.5) {
		return 'NE'
	} else if (deg >= 67.5 && deg < 90) {
		return 'ENE'
	} else if (deg >= 90 && deg < 112.5) {
		return 'E'
	} else if (deg >= 112.5 && deg < 135) {
		return 'ESE'
	} else if (deg >= 135 && deg < 157.5) {
		return 'SE'
	} else if (deg >= 157.5 && deg < 180) {
		return 'SSE'
	} else if (deg >= 180 && deg < 202.5) {
		return 'S'
	} else if (deg >= 202.5 && deg < 225) {
		return 'SSW'
	} else if (deg >= 225 && deg < 247.5) {
		return 'SW'
	} else if (deg >= 247.5 && deg < 270) {
		return 'WSW'
	} else if (deg >= 270 && deg < 292.5) {
		return 'W'
	} else if (deg >= 292.5 && deg < 315) {
		return 'WNW'
	} else if (deg >= 315 && deg < 337.5) {
		return 'NW'
	} else {
		return 'NNW'
	}
}