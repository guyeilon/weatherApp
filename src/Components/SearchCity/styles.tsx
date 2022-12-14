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

export const NoResultWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const InnerContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 24px;
`;

export const NoResultTxt = styled.div`
	color: ${({ theme }) => theme.colors.primary.modalText};
	text-align: center;

	font-size: ${({ theme }) => theme.textFontSize.lg};

	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.textFontSize.base};
	}

	& > span {
		font-weight: bold;
	}
`;

export const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const ContentWrapper = styled.div`
	overflow: hidden;
	border-radius: ${({ theme }) => theme.border.modal};
`;
export const ScrollWrapper = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: 345px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		height: 100vh;
	}
`;

export const CityWrapper = styled.button`
	display: flex;
	padding: 12px 36px;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: ${({ theme }) => theme.colors.modals.hover};
	}

	@media only screen and (${({ theme }) => theme.media.phone}) {
		padding: 12px 0px;
		overflow-y: auto;
		&:hover {
			background-color: transparent;
		}
	}
`;
export const CityName = styled.div`
	color: ${({ theme }) => theme.colors.primary.modalText};

	font-size: ${({ theme }) => theme.textFontSize.lg};
	& > span {
		font-weight: bold;
	}
`;
export const CountryName = styled.div`
	color: ${({ theme }) => theme.colors.primary.secondaryModalText};

	font-size: ${({ theme }) => theme.textFontSize.lg};
`;

export const SearchScreen = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: 40px;
	margin-top: 50px;
`;
export const SearchScreenTxt = styled.div`
	color: ${({ theme }) => theme.colors.primary.modalText};
	font-size: ${({ theme }) => theme.textFontSize.xs}; ;
`;
