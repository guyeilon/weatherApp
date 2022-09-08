import React, { useEffect, useRef, useState } from 'react';
import { City, CityNameHighlighterProps, SearchCityPopOverProps, SearchCityProps } from './types';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { Bars } from 'react-loader-spinner';
import { SvgCity } from '../../assets/Svg.styles';
import { useAutocompleteResult } from './hooks/useAutocompleteResult';
import { useForecastStore } from '../../zustand/store';

const SearchCity: React.FC<SearchCityProps> = () => {
	const [search, setSearch] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};

	const { citiesData, isLoading } = useAutocompleteResult(search);

	return (
		<>
			<Styled.Input
				placeHolder='Try "Tel Aviv - Jaffa"...'
				onChange={handleChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<SearchCityPopOver
				isLoading={isLoading}
				data={!!search ? citiesData : []}
				show={!!search && isFocused}
				isFocused={isFocused}
				searchValue={search}
				setSearch={setSearch}
			/>
		</>
	);
};

export default SearchCity;

const SearchCityPopOver: React.FC<SearchCityPopOverProps> = ({
	isLoading,
	data,
	show,
	searchValue,
	isFocused,
	setSearch,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const { setCityKey, setCityName } = useForecastStore();

	const closeModal = () => {
		setIsExpanded(false);
		// setSearch('');
	};

	useEffect(() => {
		// console.log('isFocused', isFocused);
		// console.log('isExpanded', isExpanded);
		// console.log('show', show);
		if (!isExpanded) {
			show && setIsExpanded(true);
		} else {
			// !show && closeModal();
		}
	}, [show, isFocused]);
	// console.log('searchModalOpen?', isExpanded);
	// console.log('show', show);
	// console.log('isLoading', isLoading);
	// console.log('searchValue', searchValue);

	const handleClick = (city: City) => {
		setCityKey(city.cityKey);
		setCityName(city.cityName);

		closeModal();
	};

	return (
		<>
			{isExpanded && (
				<Modal
					blur='main'
					padding='0 '
					width='476px'
					height='360px'
					position='top'
					isModalOpen={isExpanded}
					closeModal={() => setIsExpanded(false)}
					useCloseModal={false}>
					{isLoading && (
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
					{!isLoading && data?.length === 0 && (
						<Styled.NoResultWrapper>
							<Styled.InnerContentWrapper>
								<SvgCity width='120' height='120' />
								<Styled.NoResultTxt>
									We couldn’t find any city named "<span>{searchValue}</span>@", please try again.
								</Styled.NoResultTxt>
							</Styled.InnerContentWrapper>
						</Styled.NoResultWrapper>
					)}
					{data && data.length > 0 && searchValue && (
						<Styled.ContentWrapper>
							<Styled.ScrollWrapper>
								{data.map(city => (
									<Styled.CityWrapper key={city.cityKey} onClick={() => handleClick(city)}>
										<CityNameHighlighter searchValue={searchValue} cityName={city.cityName} />
										<Styled.CountryName>{city.countryName}</Styled.CountryName>
									</Styled.CityWrapper>
								))}
							</Styled.ScrollWrapper>
						</Styled.ContentWrapper>
					)}
				</Modal>
			)}
		</>
	);
};

const CityNameHighlighter: React.FC<CityNameHighlighterProps> = ({ cityName, searchValue }) => {
	const parts = cityName.split(new RegExp(`(${searchValue})`, 'gi'));

	return (
		<Styled.CityName>
			<span>{parts[1]}</span>
			{parts[2]},&nbsp;
		</Styled.CityName>
	);
};