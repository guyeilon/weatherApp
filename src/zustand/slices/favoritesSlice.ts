import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CityData } from '../../types/forecastType';

export type favoritesSlice = {
	favorites: CityData[] | undefined;
	setFavorites: (favorites: CityData[] | undefined) => void;
};

export const favoritesSlice: StateCreator<
	favoritesSlice,
	[],
	[['zustand/persist', favoritesSlice], ['zustand/immer', never]],
	favoritesSlice
> = persist(
	immer(
		(set): favoritesSlice => ({
			favorites: undefined,
			setFavorites: (favorites: CityData[] | undefined) =>
				set(state => {
					state.favorites = favorites;
				}),
		})
	),
	{
		name: 'weatherApp_Favorites',
		getStorage: () => localStorage,
	}
);
