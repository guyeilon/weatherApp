import { IUser } from '../../types/userTypes';
import { useUserStore } from '../store';

interface UseUser {
	user: IUser | null;
	updateUser: (user: IUser | undefined) => void;
	clearUser: () => void;
}

export const useUser = (): UseUser => {
	const setUser = useUserStore(state => state.setUser);
	const deleteUser = useUserStore(state => state.clearUser);

	const user = useUserStore(state => state.user);

	const updateUser = (newUser: IUser | undefined) => {
		if (!newUser) return null;
		setUser(newUser);
	};

	const clearUser = () => {
		deleteUser();
	};

	return { user, updateUser, clearUser };
};
