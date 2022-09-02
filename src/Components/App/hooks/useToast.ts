import React from 'react';
import { Id, toast } from 'react-toastify';

interface UseCustomToast {
	title: string;
	status: 'error' | 'success';
}

export function fireToast({ title, status }: UseCustomToast) {
	if (status === 'error') {
		if (!toast.isActive('error')) {
			return toast.error(title, { toastId: 'error', containerId: 'error' });
		}
	}
	if (status === 'success') {
		// if (!toast.isActive('success')) {
		return toast.success(title, { toastId: 'success', containerId: 'success' });
		// }
	}
}
