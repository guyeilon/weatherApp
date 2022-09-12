import axios, { AxiosResponse } from 'axios';
import { IUser } from '../types/userTypes';

import { USER_URL } from './constants';

export interface Credentials {
	email: string;
	password: string;
}

export const serverApi = axios.create({
	baseURL: USER_URL,
});

export const getJWTHeader = (user: IUser | null): Record<string, string> => {
	return { Authorization: `Bearer ${user?.accessToken}` };
};

export const privateApi = axios.create({
	baseURL: USER_URL,
	headers: { 'Content-Type': 'application/json' },
});
