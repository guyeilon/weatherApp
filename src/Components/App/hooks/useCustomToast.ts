import { Id, toast } from 'react-toastify';

interface UseCustomToast {
	title: string;
	status: 'error' | 'success';
}

export function useCustomToast({ title, status }: UseCustomToast) {
	if (status === 'error') {
		return toast.error(title, { toastId: 'error', containerId: 'error' });
	}
	if (status === 'success') {
		return toast.success(title, { toastId: 'success', containerId: 'success' });
	}
}
