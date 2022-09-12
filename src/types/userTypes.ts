import { CityData } from './forecastType';

export interface IUser {
	email: string;
	first_name: string;
	last_name: string;
	id: number | undefined;
	accessToken: string;
}
// add To fav Response:
export interface AddFavRes {
	key: number;
	title: string;
	city: string;
	country: string;
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

export interface GetFavorites {
	results: Favorites[];
}
export interface Favorites {
	key: number;
	city: string;
	country: string;
}

export interface FavoritesQuery {
	favorites: CityData[];
	isSuccess: boolean;
}

export interface Credentials {
	email: string;
	password: string;
}
