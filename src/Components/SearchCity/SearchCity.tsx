import React, { useEffect, useRef, useState } from 'react';
import { City, CityNameHighlighterProps, SearchCityProps } from './types';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { Bars } from 'react-loader-spinner';
import { SvgCity } from '../../assets/Svg.styles';
import { useAutocompleteResult } from './hooks/useAutocompleteResult';
import { CityData } from '../../types/forecastType';
import { useForecast } from '../../zustand/hooks/useForecast';

const SearchCity: React.FC<SearchCityProps> = ({ search, closeModal }) => {
	const { citiesData, isLoading, isFetched } = useAutocompleteResult(search);

	const { setCityData } = useForecast();

	// const show = !!search && isFocused;

	const handleClick = (city: CityData) => {
		setCityData(city);
		closeModal();
	};

	return (
		<>
			{isLoading && !!search && (
				<Styled.LoaderWrapper>
					<Bars
						height='80'
						width='80'
						color='#0f0f0ef0'
						ariaLabel='bars-loading'
						wrapperStyle={{}}
						wrapperClass=''
						visible={true}
					/>
				</Styled.LoaderWrapper>
			)}
			{!isLoading && citiesData?.length === 0 && (
				<Styled.NoResultWrapper>
					<Styled.InnerContentWrapper>
						<SvgCity width='120' height='120' />
						<Styled.NoResultTxt>
							We couldn’t find any city named "<span>{search}</span>", please try again.
						</Styled.NoResultTxt>
					</Styled.InnerContentWrapper>
				</Styled.NoResultWrapper>
			)}
			{!search && (
				<Styled.SearchScreen>
					<SvgCity width='120' height='120' />
					<Styled.SearchScreenTxt>Please search any city in the search button.</Styled.SearchScreenTxt>
				</Styled.SearchScreen>
			)}
			{citiesData && citiesData.length > 0 && search && (
				<Styled.ContentWrapper>
					<Styled.ScrollWrapper>
						{citiesData.map(city => (
							<Styled.CityWrapper key={city.key} onClick={() => handleClick(city)}>
								<CityNameHighlighter search={search} cityName={city.cityName} />
								<Styled.CountryName>{city.countryName}</Styled.CountryName>
							</Styled.CityWrapper>
						))}
					</Styled.ScrollWrapper>
				</Styled.ContentWrapper>
			)}
		</>
	);
};

export default SearchCity;

const CityNameHighlighter: React.FC<CityNameHighlighterProps> = ({ cityName, search }) => {
	const parts = cityName.split(new RegExp(`(${search})`, 'gi'));

	return (
		<Styled.CityName>
			<span>{parts[1]}</span>
			{parts[2]},&nbsp;
		</Styled.CityName>
	);
};
