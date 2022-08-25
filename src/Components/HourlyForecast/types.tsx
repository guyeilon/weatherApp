export interface hourlyForecastProps {
	hourlyData: [
		{
			icon: number;
			temp: number;
			wind: number;
			date: number;
		}
	];
	// onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
