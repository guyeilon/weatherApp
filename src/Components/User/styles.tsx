import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const ContentWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.modals.primaryBg};

	border-radius: ${({ theme }) => theme.border.modalUp};
	box-shadow: ${({ theme }) => theme.boxShadows.base};

	display: grid;
	grid-template-columns: 30px 1fr 30px;
	grid-template-rows: repeat(4, fit-content(100%));
	align-items: start;

	width: 100%;

	/* height: 713px; */

	position: fixed;
	top: 135px;
	right: auto;
	left: auto;
	margin: 0 auto;
	bottom: 0;

	& > * {
		grid-column: 2;
	}

	@media only screen and (${({ theme }) => theme.media.tablet}) {
		max-width: 508px;
		height: 559px;
		grid-template-columns: 77px fit-content(100%) 77px;

		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		border-radius: ${({ theme }) => theme.border.modal};
	}

	@media only screen and (${({ theme }) => theme.media.desktop}) {
		width: 508px;
		height: 559px;
		grid-template-columns: 77px fit-content(100%) 77px;

		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		border-radius: ${({ theme }) => theme.border.modal};
	}
`;

export const Header = styled.h1`
	margin-top: 37px;
	color: ${({ theme }) => theme.colors.primary.modalText};
	text-align: center;
	margin-bottom: 24px;
	font-size: ${({ theme }) => theme.headingFontSize.h1};
	@media only screen and (${({ theme }) => theme.media.phone}) {
		font-size: ${({ theme }) => theme.headingFontSize.h2};
		margin-top: 54px;
		margin-bottom: 40px;
	}
`;

interface LineProps {
	data: string;
}
export const Line = styled.hr<LineProps>`
	position: relative;
	text-align: center;
	line-height: 1rem;
	outline: 0;
	border: 0;
	height: 20px;
	font-size: ${({ theme }) => theme.textFontSize.sm};
	color: #222;
	grid-column: 1 / -1;
	margin-left: 54px;
	margin-top: 32px;
	margin-bottom: 36px;
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;

		width: 400px;
		height: 2px;
		background-color: #f2f2f2;
		@media only screen and (${({ theme }) => theme.media.phone}) {
			width: 354px;
		}
	}
	&:after {
		position: absolute;
		position: relative;
		display: inline-block;
		color: black;

		padding: 0 16px;
		line-height: 1.5em;

		content: attr(data);

		color: #444e72;
		background-color: #fff;
	}

	@media only screen and (${({ theme }) => theme.media.phone}) {
		margin-left: 30px;
		margin-top: 48px;
		margin-bottom: 52px;
	}
`;

export const ButtonWrapper = styled.div`
	grid-column: 1 / -1;
	padding-left: 47px;
	padding-right: 47px;
	margin-bottom: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 16px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 47px;
	}
`;
export const Btn = styled(Button)`
	color: ${({ theme }) => theme.colors.primary.modalText};
`;

export const Div = styled.div`
	position: fixed;
	top: 123px;
	left: 100px;
	width: 1167px;
	height: 355px;
	z-index: -1;
`;
