import styled from 'styled-components/macro';

export const MapWrapper = styled.div`
	width: 100vw;
	height: calc (100vh - 90px);
	/* height: 100vh; */
	color: #fff;
	margin-top: 90px;
	@media only screen and (${({ theme }) => theme.media.phone}) {
		margin-top: 0;
	}
`;
