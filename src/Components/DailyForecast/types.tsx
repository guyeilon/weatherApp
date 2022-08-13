export type dataType = {
	icon: number;
	dayTemp: number;
	nightTemp: number;
	dayPhrase: string;
	nightPhrase: string;
	timestamp: number;
	date: number;
};

export interface DailyForecastProps {
	getData: (dayInx: number) => dataType;
	cityName?: string;
}
