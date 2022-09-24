import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	const location = useLocation();

	const AddRemoveFav = async (cityData: CityData): Promise<void> => {
		try {
			const { data, status }: AxiosResponse<AddFavRes> = await privateApi.post('/favorites/', {
				key: Number(cityData.key),
				city: cityData.cityName,
				country: cityData.countryName,
			});
			if (data && 'city' in data) {
				const title = `${data?.city} has added to favorites `;
				fireToast({ title, status: 'success' });
			}
			if (!data || Object.keys(data).length === 0 || status === 204) {
				const title = `${cityData.cityName} has removed from favorites `;
				fireToast({ title, status: 'success' });
			}
		} catch (errorResponse: any) {
			if (errorResponse?.response) {
				const status = errorResponse.response.status;
				if (status === 400) {
					const title = 'Unauthorized';
					fireToast({ title, status: 'error' });
					navigate('/login', { state: { from: location }, replace: true });
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
			console.log(data);

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
