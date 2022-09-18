import { type } from 'os';
import { CityData } from './forecastType';

export interface GetLatLng {
	results: GoogleResult[];
	status: string;
}

export interface GoogleResult {
	geometry: {
		location: Location;
	};
}

export interface Location {
	lat: number;
	lng: number;
}

export type Temperature = {
	day: number;
	night: number;
	icon: number;
};

export type Favorites = {
	results: CityData[];
};

export interface MapData {
	location?: Location | undefined;
	cityData?: CityData | undefined;
	temperature: Temperature;
}
