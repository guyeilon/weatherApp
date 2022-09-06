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
		font-size: ${({ theme }) => theme.textFontSize.lg};

		/* padding: 28px 40px;	 */
		font-family: Overpass;
		border-radius: 8px;
		bottom: 54px;

		@media only screen and (${({ theme }) => theme.media.phone}) {
			bottom: 128px;
		}
	}

	button[aria-label='close'] {
		display: none;
	}

	.body .Toastify__toast-icon {
		width: 30px;
		@media only screen and (${({ theme }) => theme.media.phone}) {
			width: 24px;
		}
	}

	.progress {
	}
`;

export const ToastSuccess = styled(Toast)`
	.toast {
		background-color: ${({ theme }) => theme.colors.toast.success};
		color: ${({ theme }) => theme.colors.primary.text};
	}
`;
export const ToastError = styled(Toast)`
	.toast {
		background-color: ${({ theme }) => theme.colors.toast.error};
		color: #4d4d4d;
	}
`;
