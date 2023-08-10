const enum EnumServerUrlInfo {
	OPEN_WEATHER = 'https://api.openweathermap.org/data/2.5/weather',
	API_KEY = '810e1dfb3697f7d160ec32c41135a7af'
}

const enum EnumDirectionWind {
	N = 'N',
	NNE = 'NNE',
	NE = 'NE',
	ENE = 'ENE',
	E = 'E',
	ESE = 'ESE',
	SE = 'SE',
	SSE = 'SSE',
	S = 'S',
	SSW = 'SSW',
	SW = 'SW',
	WSW = 'WSW',
	W = 'W',
	WNW = 'WNW',
	NW = 'NW',
	NNW = 'NNW'
}

const enum EnumWindDescription {
	CALM = 'Calm',
	LIGHT_AIR = 'Light air',
	LIGHT_BREEZE = 'Light breeze',
	GENTLE_BREEZE = 'Gentle breeze',
	MODERATE_BREEZE = 'Moderate breeze',
	FRESH_BREEZE = 'Fresh breeze',
	STRONG_BREEZE = 'Strong breeze',
	NEAR_GALE = 'Near Gale',
	GALE = 'Gale',
	STRONG_GALE = 'Strong Gale',
	STORM = 'Storm',
	VIOLENT_STORM = 'Violent Storm',
	HURRICANE = 'Hurricane'
}

export {
	EnumServerUrlInfo,
	EnumDirectionWind,
	EnumWindDescription
}
