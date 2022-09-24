import { CityData } from '../../../types/forecastType';

import { useGetLatLng } from './useGetLatLng';
import { useGetPlacesForecast } from './useGetPlacesForecast';

export const useGetMapData = (cityData: CityData[]) => {
	const placesLocation = useGetLatLng(cityData);
	const mapData = useGetPlacesForecast(placesLocation);

	return mapData;
};
