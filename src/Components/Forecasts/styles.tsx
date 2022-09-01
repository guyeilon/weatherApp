import styled from 'styled-components/macro';
import Button from '../../Common/Button';

export const ContentWrapper = styled.div`
	position: relative;
	/* overflow: hidden; */
	display: grid;
	min-height: 100%;
	/* height: 100vh; */
	/* justify-content: center; */

	/* margin-top: 64px; */

	grid-template-columns: calc(100vw - 95%) minmax(auto, calc(100vw - 50px)) calc(100vw - 95%);
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
export const btnWrapper = styled.div`
	max-width: 264px;

	display: flex;

	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
export const forecastBtn = styled(Button)`
	padding: 16px 0px;

	@media only screen and (${({ theme }) => theme.media.abovePhone}) {
		display: none;
	}
`;
export const HideInMobileWrapper = styled.div`
	@media only screen and (${({ theme }) => theme.media.phone}) {
		display: none;
	}
`;
