import { CityData } from '../../types/forecastType';
import { useFavoritesStore } from '../store';

interface UseFavorites {
	favorites: CityData[] | undefined;
	setFavorites: (favorites: CityData[] | undefined) => void;
}

export const useFavorites = (): UseFavorites => {
	const setFavorites = useFavoritesStore(state => state.setFavorites);
	const favorites = useFavoritesStore(state => state.favorites);

	return { favorites, setFavorites };
};
