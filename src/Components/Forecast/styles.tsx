import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
	display: grid;
	margin-top: 64px;

	grid-template-columns: 50px auto 50px;
	@media only screen and (${({ theme }) => theme.media.tablet}) {
	}
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-columns: 20% auto 20%;
	}

	> * {
		grid-column: 2;
	}
`;
