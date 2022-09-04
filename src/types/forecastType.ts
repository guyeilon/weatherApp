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

export type DailyData = [
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
export type HourlyData = [
	{
		icon: number;
		temp: number;
		wind: number;
		date: number;
	}
];

export interface ReturnDailyForecast {
	updatedAt: number;
	fiveDaysData: DailyData;
	isSuccess: boolean;
}

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
export interface ReturnHourlyForecast {
	hourlyData: HourlyData;
	isSuccess: boolean;
}
export type fiveDaysData = [
	{
		dayTemp: number;
		nightTemp: number;
		date: number;
	}
];

export interface LocationKey {
	localCityKey: number;
	localCityName: string;
}
