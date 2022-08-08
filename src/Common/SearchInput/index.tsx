import React from 'react';
import { SvgSearch } from '../../assets/Svg.styles';
import * as Styled from './styles';

export interface SearchInputProps {
	className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
	return (
		<Styled.InputWrapper className={className}>
			<Styled.searchInput placeholder='Try "Tel Aviv - Jaffa"...' />
			<SvgSearch outlinedark='true' width='30' height='30' style={{ marginRight: '24px' }} />
		</Styled.InputWrapper>
	);
};

export default SearchInput;
