import { IUser } from '../../../types/user';
import { useAuthUserStore } from '../../../zustand/store';

interface UseUser {
	user: IUser | null;
	updateUser: (user: IUser | undefined) => void;
	clearUser: () => void;
}

export const useUser = (): UseUser => {
	const authUser = useAuthUserStore(state => state);

	const user = authUser.user;

	const updateUser = (newUser: IUser | undefined) => {
		if (!newUser) return null;
		authUser.setUser(newUser);
	};

	const clearUser = () => {
		authUser.clearUser();
	};

	return { user, updateUser, clearUser };
};
