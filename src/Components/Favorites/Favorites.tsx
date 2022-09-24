import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../Common/SearchInput';
import useInput from '../../Common/SearchInput/hooks/useInput';
import { CityData } from '../../types/forecastType';
import { useForecast } from '../../zustand/hooks/useForecast';
import { usePreference } from '../../zustand/hooks/usePreference';
import Map from '../Map';

import { useAddRemoveFavorites } from './hooks/useAddRemoveFavorites';
import { useGetFavorites } from './hooks/useGetFavorites';
import { useInfiniteFavorites } from './hooks/useInfiniteFavorites';

import * as Styled from './styles';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../react-query/constants';
import { FavoritesQueriesData } from '../../types/userTypes';
import { useFavorites } from '../../zustand/hooks/useFavorites';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const [search, resetSearch, searchAttribute] = useInput('wetherApp_FavoritesSearch', '');
	// const { favorites, isSuccess } = useGetFavorites(search);

	const { addRemoveFavorites, addSuccess: removeSuccess } = useAddRemoveFavorites();
	const { setCityData } = useForecast();
	const { isMapOpen } = usePreference();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const handleFavClick = (favorite: CityData) => {
		setCityData(favorite);
		navigate('/');
		resetSearch();
	};

	const handleRemove = (favorite: CityData) => {
		addRemoveFavorites(favorite);
		removeSuccess && resetSearch();
	};

	const { data, fetchNextPage, hasNextPage, isFetching, isSuccess, refetch } = useInfiniteFavorites(search);

	useEffect(() => {
		if (isSuccess && hasNextPage) {
			fetchNextPage();
		}
	}, [isSuccess, hasNextPage, fetchNextPage, data]);

	let favoritesList;

	let favsArr: CityData[] = [];

	const { favorites } = useFavorites();

	if (isSuccess) {
		const filtered = favorites?.filter(fav => fav.cityName.toLowerCase().includes(search.toLowerCase()));

		favoritesList = filtered?.map((fav, idx) => {
			const isExist = favsArr.find(favArr => favArr.key === fav.key);
			!isExist && favsArr.push(fav);

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
					<Styled.Line />
				</div>
			);
		});
	}

	return isMapOpen ? (
		<Map citiesData={favsArr} />
	) : (
		<Styled.ContentWrapper>
			<div>
				<Styled.Header>Favorites</Styled.Header>
				<Styled.InputWrapper>
					<Styled.Input placeHolder='Search from favorites' {...searchAttribute} />
				</Styled.InputWrapper>
				<Styled.FavoritesWrapper>{favoritesList}</Styled.FavoritesWrapper>
			</div>
		</Styled.ContentWrapper>
	);
};

export default Favorites;
