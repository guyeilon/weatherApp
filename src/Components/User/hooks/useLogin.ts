import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverApi } from '../../../api/userApi';
import useAuth from '../../../api/hooks/useAuth';
import { Credentials, IUser, UserServerResponse } from '../../../types/user';
import { fireToast } from '../../App/hooks/useToast';
import { useUser } from './useUser';

interface UseServerCall {
	login: (email: string, password: string) => void;
	logout: () => void;
}

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

const login = async (email: string, password: string) => {
	const user = await authServerCall('/api/auth/login/', email, password);

	return user;
};

const logout = (): void => {
	fireToast({ title: 'Logged 0ut!', status: 'success' });
};

export const useLogin = (): UseMutateFunction<IUser | undefined, unknown, Credentials, unknown> => {
	const { setAuth, auth } = useAuth();
	const { clearUser, updateUser } = useUser();
	const navigate = useNavigate();

	const location = useLocation() as unknown as LocationProps;
	const from = location.state.from.pathname || '/';

	const { mutate } = useMutation(
		(credentials: Credentials) => {
			return login(credentials.email, credentials.password);
		},
		{
			onSuccess: response => {
				// updateUser(response);
				const title = `Logged in as  ${response?.first_name}`;
				fireToast({ title, status: 'success' });
				setAuth(response);
				// navigate('/');
				navigate(from, { replace: true });
			},
		}
	);

	return mutate;
};
