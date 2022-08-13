export type dataType = {
	icon: number;
	dayTemp: number;
	nightTemp: number;
	dayPhrase: string;
	nightPhrase: string;
	timestamp: number;
	date: number;
};

export interface WeeklyForecastProps {
	getData: (dayInx: number) => dataType;
}
