import React, { useEffect, useRef, useState } from 'react';
import { SearchCityProps } from './types';
import * as Styled from './styles';
import { useQuery } from '@tanstack/react-query';
import { getAutocompleteResults } from '../../api/weatherApi';
import useDebounce from '../../hooks/useDebounce';
import Modal from '../../Common/Modal';
import Button from '../../Common/Button';

const SearchCity: React.FC<SearchCityProps> = () => {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 3000);
	const [isExpanded, setIsExpanded] = useState(false);

	const { data, isLoading } = useQuery(['Autocomplete', search], () => getAutocompleteResults(search));

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Styled.Input onChange={handleChange} />

			{isExpanded && (
				<Modal
					blur={false}
					padding='40px 30px'
					width='476px'
					height='372px'
					position='top'
					isModalOpen={isExpanded}
					closeModal={() => setIsExpanded(false)}>
					hi
				</Modal>
			)}
		</>
	);
};

export default SearchCity;

export interface SearchResultPopOverProps {}

const SearchResultPopOver: React.FC<SearchResultPopOverProps> = Props => {
	return <div></div>;
};
