import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getJWTHeader, serverApi } from '../../../api/userApi';
import { authServerCall } from '../../../auth/useAuth';
import { queryKeys } from '../../../react-query/constants';
import { IUser } from '../../../types/user';
import { useLoginStore } from '../../../zustand/store';

interface UseUser {
	user: IUser | null | undefined;
	updateUser: (user: IUser) => void;
	// useGetUserFavoritesQuery: (user: IUser | null) => void;
	clearUser: () => void;
}

const getUserFavorites = async (user: IUser | null | undefined): Promise<IUser | null> => {
	if (!user) return null;
	const { data }: AxiosResponse<{ user: IUser }> = await serverApi.get(`/api/favorites/`, {
		headers: getJWTHeader(user),
	});
	return data.user;
};
const getUserById = async (user: IUser | null | undefined): Promise<IUser | null> => {
	if (!user) return null;
	const { data }: AxiosResponse<{ user: IUser }> = await serverApi.get(`/api/user/${user.id}`, {
		headers: getJWTHeader(user),
	});
	return data.user;
};

export const useUser = (): UseUser => {
	const queryClient = useQueryClient();
	const loginStore = useLoginStore(state => state);
	const isUserInStore = loginStore.user != null;

	// const useGetUserFavoritesQuery = (user: IUser | null) => {
	// 	const { data: favorites, isLoading } = useQuery([queryKeys.user], () => getFavorites(user), {
	// 		staleTime: Infinity,
	// 		cacheTime: Infinity,
	// 		enabled: Boolean(user),
	// 	});
	// 	return { favorites, isLoading };
	// };

	const user = isUserInStore
		? queryClient.setQueryData([queryKeys.user], loginStore.user)
		: queryClient.getQueryData<IUser | null>([queryKeys.user]);

	// const { data: user } = useQuery([queryKeys.user], () => getUserById(user), {
	// 	initialData: loginStore.user,
	// 	onSuccess: (received: IUser | null) => {
	// 		if (!received) {
	// 			loginStore.clearUser();
	// 		} else {
	// 			console.log('received', received);

	// 			loginStore.setUser(received);
	// 		}
	// 	},
	// });

	const updateUser = (newUser: IUser) => {
		queryClient.setQueryData([queryKeys.user], newUser);
		loginStore.setUser(newUser);
	};

	const clearUser = () => {
		queryClient.setQueryData([queryKeys.user], null);
		loginStore.clearUser();
	};

	return { user, updateUser, clearUser };
};
