import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../react-query/constants';
import { CityData } from '../../../types/forecastType';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useFavorites } from '../../../zustand/hooks/useFavorites';

export const useInfiniteFavorites = (search?: string) => {
	const { setFavorites } = useFavorites();
	const [localFavorites] = useLocalStorage<CityData[]>('favorites', []);

	// Mimic backend pagination
	const PAGE_SIZE = 10;

	const getLocalFavs = async ({ pageParam = 0 }): Promise<{ results: CityData[]; next?: number }> => {
		let results = [...localFavorites];

		if (search) {
			results = results.filter(f => f.cityName.toLowerCase().includes(search.toLowerCase()));
		}

		const start = pageParam * PAGE_SIZE;
		const end = start + PAGE_SIZE;
		const sliced = results.slice(start, end);

		return {
			results: sliced,
			next: end < results.length ? pageParam + 1 : undefined,
		};
	};

	const query = useInfiniteQuery([queryKeys.favorites, search], ({ pageParam = 0 }) => getLocalFavs({ pageParam }), {
		getNextPageParam: lastPage => lastPage.next,
		onSuccess: resData => {
			const favsArr: CityData[] = [];
			resData.pages.forEach(pg => {
				favsArr.push(...pg.results);
			});
			setFavorites(favsArr); // keep zustand store in sync
		},
	});

	return {
		...query, // exposes data, fetchNextPage, hasNextPage, isFetching, isSuccess, refetch
	};
};
