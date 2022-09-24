import { CityData } from '../../../types/forecastType';
import { useFavorites } from '../../../zustand/hooks/useFavorites';

export const useIsAddedToFav = (cityData: CityData) => {
	const { favorites } = useFavorites();

	const res = favorites?.find(fav => fav?.key === Number(cityData?.key));

	return res ? true : false;
};
