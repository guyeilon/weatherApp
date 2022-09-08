import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useInterceptors from '../../../api/hooks/useInterceptors';
import { Favorite } from '../../../types/forecastType';
import { fireToast } from '../../App/hooks/useToast';

const SERVER_ERROR = 'There was an error contacting the server.';

export const useFavorites = () => {
	const privateApi = useInterceptors();

	const AddAndDeleteFav = async (favorite: Favorite) => {
		try {
			const { data }: AxiosResponse<Favorite> = await privateApi.post('/favorites/', {
				key: favorite.key,
				city: favorite.city,
				country: favorite.country,
			});
			return data;
		} catch (errorResponse: any) {
			if (errorResponse?.response) {
				const status = errorResponse.response.status;
				if (status === 400) {
					const title = 'Unauthorized';
					console.log({ title, status: 'warning' });
					return;
				} else {
					const title = SERVER_ERROR;
					console.log({
						title,
						status: 'error',
					});
					return;
				}
			}
		}
	};

	const { mutate } = useMutation(
		(data: Favorite) => {
			return AddAndDeleteFav(data);
		},

		{
			onSuccess: response => {
				const title = `${response?.city} add successfully to favorites `;
				fireToast({ title, status: 'success' });
			},
		}
	);
};
