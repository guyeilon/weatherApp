import { FormikTouched } from 'formik';
import React from 'react';
import { SvgSearch } from '../../assets/Svg.styles';
import * as Styled from './styles';

export interface SearchInputProps {
	className?: string;

	onBlur?: (e: React.FocusEvent<any, Element>) => void;
	onFocus?: (e: React.FocusEvent<any, Element>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeHolder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeHolder, className, onChange, onBlur, onFocus }) => {
	return (
		<Styled.InputWrapper className={className}>
			<Styled.searchInput
				// className={className}
				placeholder={placeHolder}
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
				inputMode='search'
				autoFocus
			/>
			<SvgSearch outlinedark='true' width='30' height='30' style={{ marginRight: '24px' }} />
		</Styled.InputWrapper>
	);
};

export default SearchInput;
