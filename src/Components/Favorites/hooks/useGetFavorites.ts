import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import { useFavorites } from '../../../zustand/hooks/useFavorites';

export const useGetFavorites = (search?: string) => {
	const { favorites } = useFavorites(); // ✅ Zustand store

	const { data: filteredFavorites = [], isSuccess } = useQuery(
		[queryKeys.favorites, search],
		async () => {
			let result = [...(favorites ?? [])];
			if (search) {
				result = result.filter(f => f.cityName.toLowerCase().includes(search.toLowerCase()));
			}
			return result;
		},
		{ initialData: [] }
	);

	return { favorites: filteredFavorites, isSuccess };
};
