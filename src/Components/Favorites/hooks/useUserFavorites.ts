import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getJWTHeader, serverApi } from '../../../api/userApi';
import { queryKeys } from '../../../react-query/constants';
import { Favorites, IUser } from '../../../types/user';

const getUserFavorites = async (user: IUser | null | undefined): Promise<Favorites[] | null> => {
	if (!user) return null;
	const { data } = await serverApi.get(`/api/favorites/`, {
		headers: getJWTHeader(user),
	});
	return data.results;
};
