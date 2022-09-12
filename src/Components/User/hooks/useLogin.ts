import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverApi } from '../../../api/userApi';
import { Credentials, IUser, UserServerResponse } from '../../../types/userTypes';
import { fireToast } from '../../App/hooks/useToast';
import { useUserStore } from '../../../zustand/store';

type LocationProps = {
	state: {
		from: Location;
	};
};

type UserResponse = UserServerResponse;
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

const SERVER_ERROR = 'There was an error contacting the server.';

interface UseLogin {
	mutate: UseMutateFunction<IUser | unknown, unknown, Credentials, unknown>;
	logout: () => void;
}

export const useLogin = (): UseLogin => {
	const { setUser, clearUser } = useUserStore();
	const navigate = useNavigate();

	const location = useLocation() as unknown as LocationProps;
	const from = location.state?.from.pathname || '/';

	const authServerCall = async (urlEndpoint: string, email: string, password: string): Promise<void> => {
		try {
			const { data }: AxiosResponse<AuthResponseType> = await serverApi({
				url: urlEndpoint,
				method: 'POST',
				data: { email, password },
			});
			if (data && 'access_token' in data) {
				const accessToken = data.access_token;
				const user = { ...data.user, accessToken: accessToken };
				const title = `${data?.user.first_name}, welcome!`;
				fireToast({ title, status: 'success' });
				setUser(user);
			}
		} catch (errorResponse: any) {
			if (axios.isAxiosError(errorResponse) && errorResponse?.response) {
				const status = errorResponse.response.status;
				if (status === 400) {
					const title = 'Unauthorized';
					fireToast({ title, status: 'error' });
					return;
				} else {
					const title = SERVER_ERROR;
					fireToast({ title, status: 'error' });
					return;
				}
			}
		}
	};

	const signIn = async (email: string, password: string) => {
		await authServerCall('/auth/login/', email, password);
	};

	const { mutate } = useMutation(
		(credentials: Credentials) => {
			return signIn(credentials.email, credentials.password);
		},

		{
			onSuccess: () => {
				navigate(from, { replace: true });
			},
		}
	);

	const logout = (): void => {
		clearUser();
		fireToast({ title: 'You logged out!', status: 'success' });
	};

	return { mutate, logout };
};
