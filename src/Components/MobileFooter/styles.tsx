import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const NavbarBtn = styled(Button)`
	width: fit-content;
	& svg {
		margin-bottom: 9px;
	}
`;

export const MobileFooter = styled.div`
	width: 100%;
	height: 80px;

	display: grid;
	grid-template-columns: [col1] 1fr [divider1] 1px [col2] 1fr [divider2] 1px [col3] 1fr [end];

	grid-template-areas: 'col1 divider1 col2 divider2 col3 ';

	align-items: center;

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

export const FavWrapper = styled.div`
	grid-area: col1;
	justify-self: center;
`;

export const SearchWrapper = styled.div`
	grid-area: col2;
	justify-self: center;
`;

export const HomeWrapper = styled.div`
	grid-area: col3;
	justify-self: center;
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

export const Divider1 = styled.div`
	grid-area: divider1;
	background-color: #fff;
	width: 1px;
	height: 46px;
	margin-top: 15px;
`;

export const Divider2 = styled(Divider1)`
	grid-area: divider2;
`;
