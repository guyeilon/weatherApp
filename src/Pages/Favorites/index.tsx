import React from 'react';
import { useUser } from '../../Components/User/hooks/useUser';

import * as Styled from './styles';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const { user } = useUser();
	console.log('user from fav:', user);

	// const { isLoading, favorites } = useGetUserFavoritesQuery();
	return <Styled.ContentWrapper></Styled.ContentWrapper>;
};

export default Favorites;
