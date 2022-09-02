export interface Id {
	id: number;
}

export type GetDailyForecast = {
	Day: {
		Icon: number;
		IconPhrase: string;
	};
	Night: {
		IconPhrase: string;
	};
	Temperature: Temp;
	EpochDate: string;
	WeatherIcon: Number;
};

type Temp = {
	Maximum: {
		Value: number;
	};
	Minimum: {
		Value: number;
	};
};

export interface ReturnDailyForecast {
	cityName?: string;
	updatedAt: number;
	fiveDaysData: [
		{
			icon: number;
			dayTemp: number;
			nightTemp: number;
			dayPhrase: string;
			nightPhrase: string;
			timestamp: number;
			date: number;
		}
	];
}

export interface LocationKey {
	localCityKey: number;
	localCityName: string;
}
