import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const ContentWrapper = styled.div`
	position: relative;
	display: grid;
	height: calc(100vh + 180px);

	grid-template-columns: 1fr minmax(auto, calc(100vw - 50px)) 1fr;
	@media only screen and (${({ theme }) => theme.media.tablet}) {
		grid-template-columns: calc(100vw - 95%) minmax(auto, calc(100vw - 100px)) calc(100vw - 95%);
		margin-top: 158px;
		height: calc(100vh + 90px);
	}
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-columns: 1fr minmax(auto, 1180px) 1fr;
		margin-top: 158px;
		height: calc(100vh + 90px);
	}

	> * {
		grid-column: 2;
	}
`;

export const BtnWrapper = styled.div`
	width: 112px;
	/* position: fixed;

	top: 75%;
	left: calc(50% - 136px);
	transform: translate(50%); */

	display: flex;

	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

export const LayoutBtn = styled(Button)`
	font-size: ${({ theme }) => theme.textFontSize.base};
`;

export const OrderLayout = styled.div`
	display: flex;
	flex-direction: column;
`;
