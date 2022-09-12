// Location:
export interface CityData {
	key: number;
	cityName: string;
	countryName: string;
}

export interface CityDataApi {
	Key: number;
	LocalizedName: string;
	Country: {
		EnglishName: string;
	};
}

// Search:
export type SearchCityApi = {
	Key: number;

	Country: {
		LocalizedName: string;
	};
	LocalizedName: string;
};

export interface SearchQuery {
	citiesData: CityData[];
	isLoading: boolean;
	isFetched: boolean;
}

// Daily Data:

export type GetDailyForecast = {
	Day: {
		Icon: number;
		IconPhrase: string;
	};
	Night: {
		IconPhrase: string;
	};
	Temperature: Temp;
	EpochDate: number;
	WeatherIcon: number;
};

type Temp = {
	Maximum: {
		Value: number;
	};
	Minimum: {
		Value: number;
	};
};
export type DailyData = {
	icon: number;
	dayTemp: number;
	nightTemp: number;
	dayPhrase: string;
	nightPhrase: string;
	date: number;
};

export interface DailyQuery {
	updatedAt: number;
	fiveDaysData: DailyData[];
	isSuccess: boolean;
}

// Hourly Data:

export interface GetHourlyForecast {
	WeatherIcon: number;
	DateTime: number;
	Temperature: {
		Value: number;
	};
	Wind: {
		Speed: { Value: number };
	};
}

export type HourlyData = {
	icon: number;
	temp: number;
	wind: number;
	date: number;
};

export interface HourlyQuery {
	hourlyData: HourlyData[];
	isSuccess: boolean;
}

export type Favorites = {
	results: CityData[];
};
