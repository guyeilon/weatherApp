import axios, { AxiosError, AxiosResponse } from 'axios';
import { IUser } from '../types/types';

export interface Credentials {
	email: string;
	password: string;
}

type UserResponse = IUser;
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

const SERVER_URL = 'https://weather-abra.herokuapp.com/';
const SERVER_ERROR = 'There was an error contacting the server.';

const serverApi = axios.create({
	baseURL: SERVER_URL,
});

export const getJWTHeader = (user: IUser): Record<string, string> => {
	return { Authorization: `Bearer ${user.token}` };
};

export const getUserFavorites = async (user: IUser | null): Promise<IUser | null> => {
	if (!user) return null;
	const { data }: AxiosResponse<{ user: IUser }> = await serverApi.get(`/api/favorites/`, {
		headers: getJWTHeader(user),
	});
	return data.user;
};

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
			console.log('Logged in as:', data.firstName);

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
