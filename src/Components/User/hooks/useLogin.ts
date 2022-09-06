import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverApi } from '../../../api/userApi';
import { Credentials, IUser, UserServerResponse } from '../../../types/user';
import { fireToast } from '../../App/hooks/useToast';
import { useUser } from './useUser';

type LocationProps = {
	state: {
		from: Location;
	};
};

type UserResponse = UserServerResponse;
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

const SERVER_ERROR = 'There was an error contacting the server.';

const authServerCall = async (urlEndpoint: string, email: string, password: string) => {
	try {
		const { data }: AxiosResponse<AuthResponseType> = await serverApi({
			url: urlEndpoint,
			method: 'POST',
			data: { email, password },
		});
		if (data && 'access_token' in data) {
			const accessToken = data.access_token;
			const refreshToken = data.refresh_token;
			const user = { ...data.user, accessToken: accessToken, refreshToken: refreshToken };

			return user;
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

const signIn = async (email: string, password: string) => {
	const user = await authServerCall('/api/auth/login/', email, password);
	return user;
};

interface UseLogin {
	mutate: UseMutateFunction<IUser | undefined, unknown, Credentials, unknown>;
	logout: () => void;
}

export const useLogin = (): UseLogin => {
	const { clearUser, updateUser } = useUser();
	const navigate = useNavigate();

	const location = useLocation() as unknown as LocationProps;
	const from = location.state?.from.pathname || '/';

	const { mutate } = useMutation(
		(credentials: Credentials) => {
			return signIn(credentials.email, credentials.password);
		},

		{
			onSuccess: response => {
				const title = `Logged in as  ${response?.first_name}`;
				fireToast({ title, status: 'success' });
				updateUser(response);
				navigate(from, { replace: true });
			},
		}
	);

	const logout = (): void => {
		clearUser();
		fireToast({ title: 'Logged 0ut!', status: 'success' });
	};

	return { mutate, logout };
};
