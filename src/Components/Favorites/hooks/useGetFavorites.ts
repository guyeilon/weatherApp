import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import useLocalStorage from '../../../hooks/useLocalStorage';

export const useGetFavorites = (search?: string) => {
	const [favorites] = useLocalStorage<CityData[]>('favorites', []);

	const { data: filteredFavorites = [], isSuccess } = useQuery(
		[queryKeys.favorites, search],
		async () => {
			let result = [...favorites];
			if (search) {
				result = result.filter(f => f.cityName.toLowerCase().includes(search.toLowerCase()));
			}
			return result;
		},
		{ initialData: [] }
	);

	return { favorites: filteredFavorites, isSuccess };
};
