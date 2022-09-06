export interface IUser {
	email: string;
	first_name: string;
	last_name: string;
	id: number | undefined;
	accessToken: string;
	refreshToken: string;
}

interface User {
	email: string;
	first_name: string;
	last_name: string;
	id: number | undefined;
}

export interface UserServerResponse {
	access_token: string;
	refresh_token: string;
	token: string;
	user: User;
}

export interface Favorites {
	key: number;
	title: string;
	city: string;
	country: string;
}

export interface Credentials {
	email: string;
	password: string;
}
