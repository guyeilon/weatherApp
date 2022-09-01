import { ToastContainer } from 'react-toastify';
import styled, { css } from 'styled-components/macro';

export const Toast = styled(ToastContainer).attrs({
	className: 'toast-container',
	toastClassName: 'toast',
	bodyClassName: 'body',
	progressClassName: 'progress',
})`
	/* .toast-container */
	width: fit-content;

	/* .toast is passed to toastClassName */
	.toast {
		background-color: ${({ theme }) => theme.colors.toast.success};
		font-size: ${({ theme }) => theme.textFontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeights.light};
		padding: 28px 40px;
		font-family: Overpass;
		border-radius: 8px;

		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
	}

	button[aria-label='close'] {
		display: none;
	}

	/* .body is passed to bodyClassName */
	.body {
	}

	/* .progress is passed to progressClassName */
	.progress {
		display: none;
	}
`;
