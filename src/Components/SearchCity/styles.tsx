import styled from 'styled-components/macro';
import SearchInput from '../../Common/SearchInput';

export const Input = styled(SearchInput)`
	position: relative;
`;

export const SearchResultWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	width: 476px;
	min-height: 372px;
	padding: 36px 36px;
	border-radius: 30px;
	box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);
	background-color: #fff;
`;
