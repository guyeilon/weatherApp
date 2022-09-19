import { CityData } from '../../../types/forecastType';
import { useGetFavorites } from './useGetFavorites';

export const useIsAddedToFav = (cityData: CityData) => {
	const { favorites } = useGetFavorites('');
	const res = favorites?.find(fav => fav?.key === Number(cityData?.key));
	return res ? true : false;
};
