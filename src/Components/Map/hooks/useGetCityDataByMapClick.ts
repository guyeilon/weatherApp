import googleMapReact from 'google-map-react';
import { useState } from 'react';
import { useForecast } from '../../../zustand/hooks/useForecast';
import { useGetLocation } from '../../Forecasts/hooks/useGetLocation';

export const useGetCityDataByMapClick = (geoString: string | undefined) => {
	// console.log('searching');

	const { setCityData } = useForecast();
	const cityData = useGetLocation(geoString);
	setCityData(cityData);
};
