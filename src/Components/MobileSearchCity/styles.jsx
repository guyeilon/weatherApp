import styled from 'styled-components/macro';
import Button from '../../Common/Button';
import SearchInput from '../../Common/SearchInput';

export const Btn = styled(Button)`
	width: fit-content;
`;

export const SearchModal = styled.div`
	width: 100%;
	height: calc(100vh - 90px);

	display: flex;
	flex-direction: column;

	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;
	z-index: 5;

	user-select: none;

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	border-top-right-radius: ${({ theme }) => theme.border.modal};
	border-top-left-radius: ${({ theme }) => theme.border.modal};
	box-shadow: ${({ theme }) => theme.boxShadows.base};

	padding: 36px 30px;
`;

export const SearchWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	background-color: rgba(140, 140, 140, 0.2);

	backdrop-filter: blur(0.4rem);

	z-index: 5;

	height: 100vh;
	width: 100%;
`;

export const InputWrapper = styled.div`
	width: 100%;
`;

export const Input = styled(SearchInput)`
	background-color: #fff;
	box-shadow: ${({ theme }) => theme.boxShadows.button};
	margin-bottom: 21px;
`;

export const ArrowBtn = styled(Btn).attrs(props => ({
	footer: true,
}))`
	margin-bottom: 16px;
`;
export const ResultContentWrapper = styled.div``;
export const SearchScreen = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: 40px;
	margin-top: 100px;
`;
export const SearchScreenTxt = styled.div`
	color: ${({ theme }) => theme.colors.primary.modalText};
	font-size: ${({ theme }) => theme.textFontSize.xs}; ;
`;
