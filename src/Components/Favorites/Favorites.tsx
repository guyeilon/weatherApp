import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CityData } from '../../types/forecastType';
import { useForecast } from '../../zustand/hooks/useForecast';
import { useGetFavorites } from './hooks/useGetFavorites';

import * as Styled from './styles';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const { favorites, isSuccess } = useGetFavorites();
	console.log(favorites);

	const { setCityData } = useForecast();
	const navigate = useNavigate();

	const handleFavClick = (favorite: CityData) => {
		setCityData(favorite);
		navigate('/');
	};

	let favoritesList;

	if (isSuccess) {
		favoritesList = favorites.map((fav, idx) => {
			const lastFavIdx = favorites.length - 1;
			return (
				<>
					<Styled.Favorite key={idx}>
						<Styled.NamesWrapper onClick={() => handleFavClick(fav)}>
							<Styled.CityName>{fav.cityName}</Styled.CityName>
							<Styled.CountryName>{fav.countryName}</Styled.CountryName>
						</Styled.NamesWrapper>
						<Styled.BtnWrapper>
							<Styled.FavBtn />
						</Styled.BtnWrapper>
					</Styled.Favorite>
					{lastFavIdx != idx && <Styled.Line />}
				</>
			);
		});
	}

	return (
		<Styled.ContentWrapper>
			<div>
				<Styled.Header>Favorites</Styled.Header>
				<Styled.InputWrapper>
					<Styled.Input placeHolder='Search from favorite...' />
				</Styled.InputWrapper>
				<Styled.FavoritesWrapper>{favoritesList}</Styled.FavoritesWrapper>
			</div>
		</Styled.ContentWrapper>
	);
};

export default Favorites;
