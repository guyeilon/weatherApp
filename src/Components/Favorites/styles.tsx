import styled from 'styled-components/macro';
import Button from '../../Common/Button';
import SearchInput from '../../Common/SearchInput';

export const ContentWrapper = styled.div`
	position: relative;

	display: grid;
	height: 100%;

	grid-template-columns: 1fr minmax(auto, calc(100vw - 50px)) 1fr;
	@media only screen and (${({ theme }) => theme.media.tablet}) {
		grid-template-columns: calc(100vw - 95%) minmax(auto, calc(100vw - 100px)) calc(100vw - 95%);
		margin-top: 158px;
	}
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-columns: 1fr minmax(auto, 1180px) 1fr;
		margin-top: 158px;
	}

	> * {
		grid-column: 2;
	}
`;

export const Header = styled.h1`
	font-size: ${({ theme }) => theme.headingFontSize.h1};
	color: ${({ theme }) => theme.colors.primary.text};
	margin-bottom: 24px;
`;

export const Input = styled(SearchInput)`
	color: ${({ theme }) => theme.colors.primary.text};
	background-color: ${({ theme }) => theme.colors.inputs.secondaryBg};

	& input {
		color: ${({ theme }) => theme.colors.primary.text};
		::placeholder {
			color: ${({ theme }) => theme.colors.primary.text};
			font-size: ${({ theme }) => theme.textFontSize.base};
		}
	}
`;

export const InputWrapper = styled.div`
	max-width: 372px;
	margin-bottom: 65px;
`;
export const Favorite = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;
`;
export const Line = styled.hr`
	color: rgba(255, 255, 255, 0.6);
	height: 1px;
	width: 100%;
	margin-bottom: 23.5px;
`;

export const FavoritesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NamesWrapper = styled.button`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 13.5px;
	cursor: pointer;
`;

export const BtnWrapper = styled.div`
	align-self: center;
`;

export const FavBtn = styled(Button).attrs(props => ({
	navbar: true,
	svg: 'favoritesFull',
}))`
	width: fit-content;
	justify-self: start;
	border-bottom: 2px solid transparent;
`;

export const CityName = styled.div`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: ${({ theme }) => theme.textFontSize.xl};
	font-weight: bold;
`;
export const CountryName = styled.div`
	color: rgba(255, 255, 255, 0.8);
	font-size: ${({ theme }) => theme.textFontSize.lg};
`;
