export type dataType = [
	icon: number,
	dayTemp: number,
	nightTemp: number,
	dayPhrase: string,
	nightPhrase: string,
	timestamp: number
];

export interface WeeklyForecastProps {
	getForecastDailyDataByDayIdx: (dayInx: number) => dataType;
}
