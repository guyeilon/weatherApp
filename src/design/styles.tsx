import styled from 'styled-components/macro';

interface FlexProps {
	center?: boolean;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	${({ center }) =>
		center &&
		` 
      align-items:center;
      justify-content:center;
     `};
`;
