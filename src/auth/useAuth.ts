import { authServerCall } from '../api/userApi';

import { useUserQuery } from '../react-query/useUserQuery';

interface UseAuth {
	login: (email: string, password: string) => void;
	logout: () => void;
}

export const useAuth = (): UseAuth => {
	const { clearUser, updateUserQuery } = useUserQuery();

	const login = async (email: string, password: string) => {
		const user = await authServerCall('/api/auth/login/', email, password);
		user && updateUserQuery(user);
		return user;
	};

	const logout = (): void => {
		// clear user from stored user data
		clearUser();
		console.log('Logged out!');
	};

	// Return the user object and auth methods
	return {
		login,
		logout,
	};
};
