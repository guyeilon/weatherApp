export type dailyTemp = {
	Maximum: {
		Value: number;
	};
	Minimum: {
		Value: number;
	};
};
export interface DailyForecastProps {
	cityName: string;
	icon: number;
	dailyTemp: dailyTemp;
}
