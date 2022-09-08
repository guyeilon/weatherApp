import { useEffect } from 'react';
import { useUserStore } from '../../zustand/store';

import { privateApi } from '../userApi';

const useInterceptors = () => {
	const { user } = useUserStore();

	useEffect(() => {
		const requestIntercept = privateApi.interceptors.request.use(
			config => {
				if (config?.headers && !config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
				}
				return config;
			},
			error => Promise.reject(error)
		);

		return () => {
			privateApi.interceptors.request.eject(requestIntercept);
		};
	}, [user]);

	return privateApi;
};

export default useInterceptors;
