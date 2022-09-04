import axios, { AxiosResponse } from 'axios';
import { serverApi } from '../api/userApi';
import { fireToast } from '../Components/App/hooks/useToast';
import { useUser } from '../Components/User/hooks/useUser';

import { IUser } from '../types/user';
import { useLoginStore } from '../zustand/store';

interface UseAuth {
	login: (email: string, password: string) => void;
	logout: () => void;
}

type UserResponse = IUser;
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

const SERVER_ERROR = 'There was an error contacting the server.';

export const authServerCall = async (urlEndpoint: string, email: string, password: string) => {
	try {
		const { data, status }: AxiosResponse<AuthResponseType> = await serverApi({
			url: urlEndpoint,
			method: 'POST',
			data: { email, password },
			headers: { 'Content-Type': 'application/json' },
			transformResponse: [
				data => {
					const parsData = JSON.parse(data);
					const token = parsData?.token;
					const user = parsData?.user;
					const UserData = {
						firstName: user.first_name,
						lastName: user.last_name,
						email: user.email,
						id: user.id,
						token: token,
					};

					return UserData;
				},
			],
		});

		// console.log('data', data);

		if (data && 'token' in data) {
			const title = `Logged in as  ${data.firstName}`;
			fireToast({ title, status: 'success' });

			return data;

			// update stored user data
			// updateUser(data.user);
		}
	} catch (errorResponse: any) {
		if (axios.isAxiosError(errorResponse) && errorResponse?.response) {
			const status = errorResponse.response.status;
			if (status === 400) {
				const title = 'Unauthorized';
				console.log({ title, status: 'warning' });
				return;
			} else {
				const title = SERVER_ERROR;
				console.log({
					title,
					status: 'error',
				});
				return;
			}
		}
	}
};

export const useAuth = (): UseAuth => {
	const { clearUser, updateUser } = useUser();

	const login = async (email: string, password: string) => {
		const user = await authServerCall('/api/auth/login/', email, password);
		if (user) {
			updateUser(user);
		}
		return user;
	};

	const logout = (): void => {
		clearUser();
		fireToast({ title: 'Logged 0ut!', status: 'success' });
	};

	return {
		login,
		logout,
	};
};
