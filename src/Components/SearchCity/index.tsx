import React, { useEffect, useRef, useState } from 'react';
import { SearchCityProps } from './types';
import * as Styled from './styles';
import { useQuery } from '@tanstack/react-query';
import { getAutocompleteResults } from '../../api/weatherApi';
import useDebounce from '../../hooks/useDebounce';

const SearchCity: React.FC<SearchCityProps> = Props => {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 3000);

	const { data, isLoading } = useQuery(['Autocomplete', search], () => getAutocompleteResults(search));

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};

	return <Styled.Input onChange={handleChange} />;
};

export default SearchCity;

export interface SearchResultPopOverProps {}

const SearchResultPopOver: React.FC<SearchResultPopOverProps> = Props => {
	return <div></div>;
};
