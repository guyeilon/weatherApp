import styled, { css } from 'styled-components/macro';
import Button from '../Button';

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Header = styled.h2`
	font-size: ${({ theme }) => theme.headingFontSize.h2};
	color: ${({ theme }) => theme.colors.primary.modalText};
	line-height: 1.25;
	margin-bottom: 16px;
`;
export const Body = styled.div`
	font-size: ${({ theme }) => theme.textFontSize.base};
	color: ${({ theme }) => theme.colors.primary.modalText};
	line-height: 1.5;
	margin-bottom: 64px;
	max-width: 340px;
`;
export const BtnWrapper = styled.div`
	align-self: flex-end;
	display: flex;
	gap: 24px;
`;

export const Cancel = styled(Button)`
	color: ${({ theme }) => theme.colors.primary.modalText};
`;
export const Approve = styled(Button)`
	padding: 16px 24px;
`;
