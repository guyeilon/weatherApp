import axios, { AxiosResponse } from 'axios';
import { IUser } from '../types/user';
import { USER_URL } from './constants';

export interface Credentials {
	email: string;
	password: string;
}

export const serverApi = axios.create({
	baseURL: USER_URL,
});

export const getJWTHeader = (user: IUser): Record<string, string> => {
	return { Authorization: `Bearer ${user.token}` };
};
