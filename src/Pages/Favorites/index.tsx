import React from 'react';
import { useUserQuery } from '../../services/react-query/useUserQuery';
import * as Styled from './styles';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const { useGetUserFavoritesQuery, user } = useUserQuery();
	console.log('user from fav:', user);

	// const { isLoading, favorites } = useGetUserFavoritesQuery();
	return <Styled.ContentWrapper></Styled.ContentWrapper>;
};

export default Favorites;
