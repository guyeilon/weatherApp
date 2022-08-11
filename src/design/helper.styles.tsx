import styled from 'styled-components/macro';

interface FlexProps {
	center?: boolean;
	mobile?: boolean;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	${({ center }) =>
		center &&
		` 
      align-items:center;
      justify-content:center;
     `};

	@media only screen and (${({ theme }) => theme.media.phone}) {
		${({ mobile }) =>
			mobile &&
			`
		
      align-items:center;
      justify-content:center;
     `};
	}
`;
