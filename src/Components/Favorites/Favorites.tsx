import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../Common/SearchInput';
import useInput from '../../Common/SearchInput/hooks/useInput';
import { CityData } from '../../types/forecastType';
import { useForecast } from '../../zustand/hooks/useForecast';

import { useAddRemoveFavorites } from './hooks/useAddRemoveFavorites';
import { useGetFavorites } from './hooks/useGetFavorites';

import * as Styled from './styles';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const [search, resetSearch, searchAttribute] = useInput('wetherApp_FavoritesSearch', '');
	const { favorites, isSuccess } = useGetFavorites(search);

	const { addRemoveFavorites, addSuccess: removeSuccess } = useAddRemoveFavorites();
	const { setCityData } = useForecast();
	const navigate = useNavigate();

	const handleFavClick = (favorite: CityData) => {
		setCityData(favorite);
		navigate('/');
		resetSearch();
	};

	const handleRemove = (favorite: CityData) => {
		addRemoveFavorites(favorite);
		removeSuccess && resetSearch();
	};

	let favoritesList;

	if (isSuccess) {
		favoritesList = favorites.map((fav, idx) => {
			const lastFavIdx = favorites.length - 1;
			return (
				<div key={idx}>
					<Styled.Favorite>
						<Styled.NamesWrapper onClick={() => handleFavClick(fav)}>
							<Styled.CityName>{fav.cityName}</Styled.CityName>
							<Styled.CountryName>{fav.countryName}</Styled.CountryName>
						</Styled.NamesWrapper>
						<Styled.BtnWrapper>
							<Styled.FavBtn onClick={() => handleRemove(fav)} />
						</Styled.BtnWrapper>
					</Styled.Favorite>
					{lastFavIdx != idx && <Styled.Line />}
				</div>
			);
		});
	}

	return (
		<Styled.ContentWrapper>
			<div>
				<Styled.Header>Favorites</Styled.Header>
				<Styled.InputWrapper>
					<SearchInput placeHolder='Search from favorites' {...searchAttribute} />
				</Styled.InputWrapper>
				<Styled.FavoritesWrapper>{favoritesList}</Styled.FavoritesWrapper>
			</div>
		</Styled.ContentWrapper>
	);
};

export default Favorites;
