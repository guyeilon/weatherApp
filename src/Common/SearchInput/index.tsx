import React from 'react';
import { SvgSearch } from '../../assets/Svg.styles';
import * as Styled from './styles';

export interface SearchInputProps {
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, onChange }) => {
	return (
		<Styled.InputWrapper className={className} onChange={onChange}>
			<Styled.searchInput placeholder='Try "Tel Aviv - Jaffa"...' />
			<SvgSearch outlinedark='true' width='30' height='30' style={{ marginRight: '24px' }} />
		</Styled.InputWrapper>
	);
};

export default SearchInput;
