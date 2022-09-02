import { AxiosResponse } from 'axios';

import { IUser } from '../../../types/user';

// import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
// import { queryKeys } from '../../../react-query/constants';
// import {
//   clearStoredUser,
//   getStoredUser,
//   setStoredUser,
// } from '../../../user-storage';

// async function getUser(user: User | null): Promise<User | null> {
//   if (!user) return null;
//   const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get(
//     `/user/${user.id}`,
//     {
//       headers: getJWTHeader(user),
//     },
//   );
//   return data.user;
// }

interface UseUser {
	user: IUser | null;
	updateUser: (user: IUser) => void;
	clearUser: () => void;
}

export function useUser(): UseUser {
	// TODO: call useQuery to update user data from server
	const user = null;

	// meant to be called from useAuth
	function updateUser(newUser: IUser): void {}

	// meant to be called from useAuth
	function clearUser() {
		// TODO: reset user to null in query cache
	}

	return { user, updateUser, clearUser };
}
