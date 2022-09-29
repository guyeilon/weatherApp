import React from 'react';

import * as Styled from './styles';

export interface ConfirmMessageProps {
	header: string;
	body: string;
	cancel: string;
	approve: string;
	approveFn: () => void;
	cancelFn: () => void;
}

const ConfirmMessage: React.FC<ConfirmMessageProps> = ({ header, body, cancel, approve, cancelFn, approveFn }) => {
	return (
		<Styled.ContentWrapper>
			<Styled.Header>{header}</Styled.Header>
			<Styled.Body>{body}</Styled.Body>
			<Styled.BtnWrapper>
				<Styled.Cancel renderAs={'a'} onClick={cancelFn}>
					{cancel}
				</Styled.Cancel>
				<Styled.Approve login onClick={approveFn}>
					{approve}
				</Styled.Approve>
			</Styled.BtnWrapper>
		</Styled.ContentWrapper>
	);
};

export default ConfirmMessage;
