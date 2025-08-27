import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { CityData } from '../../../types/forecastType';
import { fireToast } from '../../App/hooks/useToast';
import { queryKeys } from '../../../react-query/constants';
import { useFavorites } from '../../../zustand/hooks/useFavorites';

interface UseAddRemoveFavorites {
	addRemoveFavorites: UseMutateFunction<void, unknown, CityData, unknown>;
	addSuccess: boolean;
}

export const useAddRemoveFavorites = (): UseAddRemoveFavorites => {
	const queryClient = useQueryClient();
	const { favorites, setFavorites } = useFavorites();

	const addRemoveFav = async (cityData: CityData): Promise<void> => {
		const exists = (favorites ?? []).some((f: CityData) => f.key === cityData.key);

		if (exists) {
			setFavorites((favorites ?? []).filter((f: CityData) => f.key !== cityData.key));
			fireToast({ title: `${cityData.cityName} removed from favorites`, status: 'success' });
		} else {
			setFavorites([...(favorites ?? []), cityData]);
			fireToast({ title: `${cityData.cityName} added to favorites`, status: 'success' });
		}
	};

	const { mutate: addRemoveFavorites, isSuccess: addSuccess } = useMutation((data: CityData) => addRemoveFav(data), {
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.favorites]);
		},
	});

	return { addRemoveFavorites, addSuccess };
};
