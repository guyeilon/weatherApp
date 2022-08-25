export interface WeeklyForecastProps {
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
