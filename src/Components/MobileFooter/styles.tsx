import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const NavbarBtn = styled(Button)`
	width: fit-content;
`;

export const MobileFooter = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	flex-direction: row;

	justify-content: space-around;

	position: fixed;
	top: auto;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;

	background-color: rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-top-right-radius: ${({ theme }) => theme.border.modal};
	border-top-left-radius: ${({ theme }) => theme.border.modal};

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;

export const HomeBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'home',
	footer: true,
}))``;

export const FavBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'favorites',
	footer: true,
}))``;
export const SearchBtn = styled(NavbarBtn).attrs(props => ({
	svg: 'search',
	footer: true,
}))``;

export const Divider = styled.div`
	background-color: #fff;
	width: 1px;
	height: 46px;
	margin-top: 15px;
`;
