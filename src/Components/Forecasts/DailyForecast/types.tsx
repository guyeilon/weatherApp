import { DailyData } from '../../../types/forecastType';

export interface DailyForecastProps {
	cityName: string;
	updatedAt: number;
	data: DailyData;
}
