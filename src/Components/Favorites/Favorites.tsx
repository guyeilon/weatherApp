import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../../Common/SearchInput/hooks/useInput';
import { CityData } from '../../types/forecastType';
import { useForecast } from '../../zustand/hooks/useForecast';
import { usePreference } from '../../zustand/hooks/usePreference';
import Map from '../Map';

import { useAddRemoveFavorites } from './hooks/useAddRemoveFavorites';

import { useInfiniteFavorites } from './hooks/useInfiniteFavorites';

import * as Styled from './styles';

import { useFavorites } from '../../zustand/hooks/useFavorites';
import Modal from '../../Common/Modal';
import ConfirmMessage from '../../Common/ConfirmMessage';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = Props => {
	const [search, resetSearch, searchAttribute] = useInput('weatherApp_FavoritesSearch', '');
	// const { favorites, isSuccess } = useGetFavorites(search);

	const { addRemoveFavorites, addSuccess: removeSuccess } = useAddRemoveFavorites();
	const { setCityData } = useForecast();
	const { isMapOpen } = usePreference();
	const { isMobile } = useWindowSize();
	const navigate = useNavigate();

	const [isRemoveFavMsgExpanded, setIsRemoveFavMsgExpanded] = useState(false);
	const [favToRemove, setFavToRemove] = useState<CityData | undefined>(undefined);

	const handleFavClick = (favorite: CityData) => {
		setCityData(favorite);
		navigate('/');
		resetSearch();
	};

	const handleRemove = (favorite: CityData) => {
		setIsRemoveFavMsgExpanded(true);
		setFavToRemove(favorite);
	};

	const removeFav = () => {
		addRemoveFavorites(favToRemove!);
		removeSuccess && resetSearch();
		setIsRemoveFavMsgExpanded(false);
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
		<>
			<Styled.ContentWrapper>
				<div>
					<Styled.Header>Favorites</Styled.Header>
					<Styled.InputWrapper>
						<Styled.Input placeHolder='Search from favorites' {...searchAttribute} />
					</Styled.InputWrapper>
					<Styled.FavoritesWrapper>{favoritesList}</Styled.FavoritesWrapper>
				</div>
			</Styled.ContentWrapper>
			{isRemoveFavMsgExpanded && (
				<Modal
					blur='all'
					padding='48px 48px '
					width={isMobile ? '100%' : '500px'}
					height={isMobile ? '340px' : '308px'}
					position={isMobile ? 'bottom' : 'top'}
					isModalOpen={isRemoveFavMsgExpanded}
					closeModal={() => setIsRemoveFavMsgExpanded(false)}
					useCloseModal={true}>
					<ConfirmMessage
						header={'Remove from favorites'}
						body={`Are you sure you want to remove ${favToRemove?.cityName} from favorites list?`}
						cancel={'Keep it'}
						approveFn={() => removeFav()}
						cancelFn={() => setIsRemoveFavMsgExpanded(false)}
						approve={'Yes, remove'}
					/>
				</Modal>
			)}
		</>
	);
};

export default Favorites;
