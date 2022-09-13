import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { object } from 'yup';
import useInterceptors from '../../../api/hooks/useInterceptors';
import { queryKeys } from '../../../react-query/constants';

import { CityData } from '../../../types/forecastType';
import { AddFavRes } from '../../../types/userTypes';
import { fireToast } from '../../App/hooks/useToast';
const SERVER_ERROR = 'There was an error contacting the server.';

interface UseAddRemoveFavorites {
	addRemoveFavorites: UseMutateFunction<void, unknown, CityData, unknown>;
	addSuccess: boolean;
}
export const useAddRemoveFavorites = (): UseAddRemoveFavorites => {
	const privateApi = useInterceptors();
	const queryClient = useQueryClient();

	const AddRemoveFav = async (CityData: CityData): Promise<void> => {
		try {
			const { data }: AxiosResponse<AddFavRes> = await privateApi.post('/favorites/', {
				key: CityData.key,
				city: CityData.cityName,
				country: CityData.countryName,
			});
			if (data && 'city' in data) {
				const title = `${data?.city} has added to favorites `;
				fireToast({ title, status: 'success' });
			}
			if (!data || Object.keys(data).length === 0) {
				const title = `${CityData.cityName} has removed from favorites `;
				fireToast({ title, status: 'success' });
			}
		} catch (errorResponse: any) {
			if (errorResponse?.response) {
				const status = errorResponse.response.status;
				if (status === 400) {
					const title = 'Unauthorized';
					fireToast({ title, status: 'error' });
					return;
				} else {
					const title = SERVER_ERROR;
					fireToast({ title, status: 'error' });
					return;
				}
			}
		}
	};

	const { mutate: addRemoveFavorites, isSuccess: addSuccess } = useMutation(
		(data: CityData) => {
			return AddRemoveFav(data);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.favorites], {
					refetchType: 'all',
				});
			},
		}
	);

	return { addRemoveFavorites, addSuccess };
};
