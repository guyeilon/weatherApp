import { authServerCall } from '../api/serverApi';
import { useUser } from '../Pages/Login/hooks/useUser';

interface UseAuth {
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

export const useAuth = (): UseAuth => {
	const { clearUser, updateUser } = useUser();

	const login = async (email: string, password: string): Promise<void> => {
		authServerCall('/api/auth/login/', email, password);
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
