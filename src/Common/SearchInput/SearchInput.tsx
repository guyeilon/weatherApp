import React, { useState } from 'react';
import { SvgSearch } from '../../assets/Svg.styles';
import useInput from './hooks/useInput';
import * as Styled from './styles';

export interface SearchInputProps {
	className?: string;
	placeHolder?: string;
	onBlur?: (e: React.FocusEvent<any, Element>) => void;
	onFocus?: (e: React.FocusEvent<any, Element>) => void;
	navbar?: boolean;
	favorites?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ navbar, placeHolder, onBlur, onFocus, ...rest }) => {
	return (
		<Styled.InputWrapper>
			<Styled.searchInput
				placeholder={placeHolder}
				onBlur={onBlur}
				onFocus={onFocus}
				inputMode='search'
				autoComplete='off'
				// autoFocus
				{...rest}
			/>
			<Styled.SearchIcon outlinedark={navbar ? 'true' : 'false'} width='30' height='30' />
			{/* <SvgSearch outlinedark='true' width='30' height='30' style={{ marginRight: '24px' }} /> */}
		</Styled.InputWrapper>
	);
};

export default SearchInput;
