import { useQuery } from '@tanstack/react-query';
import useInterceptors from '../../../api/hooks/useInterceptors';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import { Favorites, FavoritesQuery, GetFavorites } from '../../../types/userTypes';

export const useGetFavorites = (search: string | undefined): FavoritesQuery => {
	const privateApi = useInterceptors();
	const getFav = async (): Promise<Favorites[]> => {
		const { data } = await privateApi.get('/favorites/');

		return data.results;
	};

	const fallback: CityData[] = [];
	const { data: favorites = fallback, isSuccess } = useQuery([queryKeys.favorites], () => getFav(), {
		select: favorites => {
			// const favs = favorites.results;
			const cities = favorites.map(fav => {
				const key = fav.key;
				const countryName = fav.country;
				const cityName = fav.city;

				return { key, countryName, cityName };
			});

			let filtered = cities;
			if (search) filtered = filtered.filter(fav => fav.cityName.toLowerCase().includes(search.toLowerCase()));
			return filtered;
		},
	});

	return { favorites, isSuccess };
};
