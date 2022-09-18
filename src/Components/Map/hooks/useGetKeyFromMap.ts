import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityDataApi } from '../../../types/forecastType';

import { getLocationKey } from '../../Forecasts/hooks/useGetLocation';

export const useGetKeyFromMap = (): UseMutateFunction<CityDataApi, unknown, string | undefined, unknown> => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation(
		(geoString: string | undefined) => {
			const data = getLocationKey(geoString);
			return data;
		},
		{
			onSuccess: cityData => {
				queryClient.setQueryData([queryKeys.forecast, queryKeys.key], cityData);
			},
		}
	);

	return mutate;
};
