import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { FAV_URL } from '../../../api/constants';
import useInterceptors from '../../../api/hooks/useInterceptors';
import { getJWTHeader } from '../../../api/userApi';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import { FavoritesResponse, FavoritesTransform } from '../../../types/userTypes';
import { useFavorites } from '../../../zustand/hooks/useFavorites';
import { useUser } from '../../../zustand/hooks/useUser';

export const useInfiniteFavorites = (search: string | undefined) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { setFavorites } = useFavorites();
	const { user } = useUser();
	const transformResult = (data: FavoritesResponse): FavoritesTransform => {
		return {
			...data,
			results: data.results.map(res => {
				const key = res.key;
				const cityName = res.city;
				const countryName = res.country;

				return { key, cityName, countryName };
			}),
		};
	};
	const getFav = async (url: string): Promise<FavoritesTransform> => {
		try {
			const { data, status } = await axios.get(url, {
				headers: getJWTHeader(user),
			});

			if (status === 401) {
				navigate('/login', { state: { from: location }, replace: true });
				return Promise.reject(new Error('Unauthorized'));
			}

			return transformResult(data);
		} catch (error) {
			navigate('/login', { state: { from: location }, replace: true });
			return Promise.reject(error);
		}
	};

	const { data, fetchNextPage, hasNextPage, isFetching, isSuccess, refetch } = useInfiniteQuery(
		[queryKeys.favorites],
		({ pageParam = FAV_URL }) => getFav(pageParam),
		{
			getNextPageParam: lastPage => lastPage.next || undefined,

			onSuccess: resData => {
				let favsArr: CityData[] = [];
				resData.pages.map(pg => {
					pg.results.map(fav => {
						favsArr.push(fav);
					});
				});
				setFavorites(favsArr);
			},
		}
	);

	return { data, fetchNextPage, hasNextPage, isFetching, isSuccess, refetch };
};
