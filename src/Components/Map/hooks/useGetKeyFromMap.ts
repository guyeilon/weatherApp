import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityDataApi } from '../../../types/forecastType';
import { useForecast } from '../../../zustand/hooks/useForecast';
import { getLocationKey } from '../../Forecasts/hooks/useGetLocation';

export const useGetKeyFromMap = (): UseMutateFunction<CityDataApi, unknown, string | undefined, unknown> => {
	const queryClient = useQueryClient();
	const { setCityData } = useForecast();
	const { mutate } = useMutation(
		(geoString: string | undefined) => {
			const data = getLocationKey(geoString);
			console.log(data);

			return data;
		},
		{
			onSuccess: data => {
				queryClient.setQueryData([queryKeys.forecast, queryKeys.key], data);
				const cityData = {
					key: data?.Key,
					cityName: data?.LocalizedName,
					countryName: data?.Country?.EnglishName,
				};
				console.log(cityData);

				setCityData(cityData);
			},
		}
	);

	return mutate;
};
