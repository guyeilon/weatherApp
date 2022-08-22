import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
	display: grid;

	margin-top: 158px;
	/* margin-top: 64px; */

	grid-template-columns: 50px auto 50px;
	@media only screen and (${({ theme }) => theme.media.tablet}) {
		grid-template-columns: 370px minmax(auto, 1180px) 370px;
	}
	@media only screen and (${({ theme }) => theme.media.desktop}) {
		grid-template-columns: 1fr minmax(auto, 1180px) 1fr;
	}

	> * {
		grid-column: 2;
	}
`;
