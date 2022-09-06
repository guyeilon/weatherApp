import React from 'react';

import * as Styled from './styles';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	// const { userFavorites } = useUserFavorites();
	return (
		<Styled.ContentWrapper>
			<div>
				<Styled.Header>Favorites</Styled.Header>
				<Styled.InputWrapper>
					<Styled.Input placeHolder='Search from favorite...' />
				</Styled.InputWrapper>
			</div>
		</Styled.ContentWrapper>
	);
};

export default Favorites;
