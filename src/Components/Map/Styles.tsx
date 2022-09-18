import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const MapWrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 90px);

	color: #fff;
	margin-top: 90px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		margin-top: 0;
		height: 100vh;
	}
`;

export const CardWrapper = styled.div`
	border: 1px solid black;
	/* border-bottom: transparent; */
	margin: 50px;
	height: 50px;
	width: 150px;
	position: relative;

	background-color: ${({ theme }) => theme.colors.modals.primaryBg};
	box-shadow: ${({ theme }) => theme.boxShadows.base};
	border-radius: ${({ theme }) => theme.border.button};

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;
export const TempWrapper = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.modalText};
`;
export const IconWrapper = styled.div`
	height: 49px;
	width: 49px;
	background: ${({ theme }) => theme.colors.primary.background};
	border-radius: ${({ theme }) => theme.border.button};
	align-self: flex-start;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Icon = styled.img`
	width: 40px;
	height: 40px;

	@media only screen and (${({ theme }) => theme.media.phone}) {
		width: 30px;
		height: 30px;
	}
`;

export const BtnWrapper = styled.div`
	width: 112px;
	position: fixed;

	top: 75%;
	left: calc(50% - 136px);
	transform: translate(50%);
	z-index: 99;
`;

export const LayoutBtn = styled(Button)`
	font-size: ${({ theme }) => theme.textFontSize.base};
`;
