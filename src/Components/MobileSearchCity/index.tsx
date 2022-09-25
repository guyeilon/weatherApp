import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Styled from './styles';
import Modal from '../../Common/Modal';
import { ResultsProps } from './types';
import { SvgCity } from '../../assets/Svg.styles';
import { useAutocompleteResult } from '../SearchCity/hooks/useAutocompleteResult';
import { usePreference } from '../../zustand/hooks/usePreference';
import SearchInput from '../../Common/SearchInput';
import useInput from '../../Common/SearchInput/hooks/useInput';
import SearchCity from '../SearchCity';

interface MobileSearchCityProps {
	setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	isExpanded: boolean;
}

const MobileSearchCity: React.FC<MobileSearchCityProps> = ({ setIsExpanded, isExpanded }) => {
	const { isDarkMode } = usePreference();

	const [search, resetSearch, searchAttribute] = useInput('weatherApp_CitySearch', '');

	const [isFocused, setIsFocused] = useState(false);

	const closeModal = () => {
		setIsExpanded(false);
	};
	console.log(isExpanded);

	useEffect(() => {
		resetSearch();
	}, [isExpanded]);

	return (
		<AnimatePresence>
			<Modal
				padding='36px 30px'
				width='100%'
				height='90%'
				position='bottom'
				isModalOpen={isExpanded}
				closeModal={closeModal}>
				<Styled.ArrowBtn onClick={() => closeModal()} svg={isDarkMode ? 'whiteArrow' : 'arrow'} />
				<Styled.InputWrapper>
					<SearchInput
						placeHolder='Try "Tel Aviv - Jaffa"...'
						onFocus={() => setIsFocused(true)}
						// onBlur={() => setIsFocused(false)}
						{...searchAttribute}
					/>
				</Styled.InputWrapper>
				<Results search={search} closeModal={closeModal} />
			</Modal>
		</AnimatePresence>
	);
};
export default MobileSearchCity;

const Results: React.FC<ResultsProps> = ({ search, closeModal }) => {
	return (
		<Styled.ResultContentWrapper>
			<SearchCity search={search} closeModal={closeModal} />
		</Styled.ResultContentWrapper>
	);
};
