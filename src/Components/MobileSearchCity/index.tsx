import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { ResultsProps } from './types';
import { SvgCity } from '../../assets/Svg.styles';
import { useAutocompleteResult } from '../SearchCity/hooks/useAutocompleteResult';
import { usePreference } from '../../hooks/usePreference';

interface MobileSearchCityProps {
	setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	isExpanded: boolean;
}

const MobileSearchCity: React.FC<MobileSearchCityProps> = ({ setIsExpanded, isExpanded }) => {
	const { preference } = usePreference();
	const isDarkMode = preference.theme === 'dark';

	const [search, setSearch] = useState('');
	const { citiesData, isLoading } = useAutocompleteResult(search);
	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};

	console.log('is Loading from mobile....', isLoading);

	return (
		<AnimatePresence>
			<Modal
				padding='36px 30px'
				width='100%'
				height='80%'
				position='bottom'
				isModalOpen={isExpanded}
				closeModal={() => setIsExpanded(false)}>
				<Styled.ArrowBtn onClick={() => setIsExpanded(false)} svg={isDarkMode ? 'whiteArrow' : 'arrow'} />
				<Styled.InputWrapper>
					<Styled.Input onChange={handleChange} />
				</Styled.InputWrapper>
				<Results isLoading={isLoading} data={citiesData} searchValue={search}></Results>
			</Modal>
		</AnimatePresence>
	);
};
export default MobileSearchCity;

const Results: React.FC<ResultsProps> = ({ isLoading, data, searchValue }) => {
	return (
		<Styled.ResultContentWrapper>
			{
				<Styled.SearchScreen>
					<SvgCity width='120' height='120' />
					<Styled.SearchScreenTxt>Please search any city in the search button.</Styled.SearchScreenTxt>
				</Styled.SearchScreen>
			}
		</Styled.ResultContentWrapper>
	);
};
