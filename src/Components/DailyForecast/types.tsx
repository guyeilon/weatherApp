export type dataType = [
	icon: number,
	dayTemp: number,
	nightTemp: number,
	dayPhrase: string,
	nightPhrase: string,
	timestamp: number
];

export interface DailyForecastProps {
	getForecastDailyDataByDayIdx: (dayInx: number) => dataType;
	cityName?: string;
}
