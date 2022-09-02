import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserFavorites } from '../api/userApi';

import { queryKeys } from './constants';
import { IUser } from './types';

interface UseUser {
	user: IUser | undefined;
	updateUserQuery: (user: IUser) => void;
	useGetUserFavoritesQuery: (user: IUser | null) => void;
	clearUser: () => void;
}

export const useUserQuery = (): UseUser => {
	const queryClient = useQueryClient();

	const useGetUserFavoritesQuery = (user: IUser | null) => {
		const { data: favorites, isLoading } = useQuery([queryKeys.user], () => getUserFavorites(user), {
			staleTime: Infinity,
			cacheTime: Infinity,
			enabled: Boolean(user),
		});
		return { favorites, isLoading };
	};

	const user = queryClient.getQueryData<IUser | undefined>([queryKeys.user]);

	const updateUserQuery = (newUser: IUser) => {
		queryClient.setQueryData([queryKeys.user], newUser);
	};

	const clearUser = () => {
		queryClient.setQueryData([queryKeys.user], null);
	};

	return { user, updateUserQuery, clearUser, useGetUserFavoritesQuery };
};
