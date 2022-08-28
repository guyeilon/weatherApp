import React, { useEffect, useRef, useState } from 'react';
import { SearchCityProps } from './types';
import * as Styled from './styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAutocompleteResults } from '../../api/weatherApi';
import useDebounce from '../../hooks/useDebounce';
import Modal from '../../Common/Modal';

const SearchCity: React.FC<SearchCityProps> = () => {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 2000);
	const [isExpanded, setIsExpanded] = useState(false);
	const client = useQueryClient();
	console.log('client', client.getQueryData);

	const result = client.getQueryData(['Autocomplete', search], { exact: true });
	console.log('result,', result);

	const { data, isLoading } = useQuery(
		['Autocomplete', result ? search : debouncedSearch],
		() => getAutocompleteResults(result ? search : debouncedSearch),
		{
			enabled: !!search,
			cacheTime: Infinity,
			staleTime: Infinity,
		}
	);

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};
	console.log('data', data);

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
