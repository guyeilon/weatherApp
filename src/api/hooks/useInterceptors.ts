import { useEffect } from 'react';

import { privateApi } from '../userApi';
import { useUser } from '../../Components/User/hooks/useUser';

const useInterceptors = () => {
	const { user } = useUser();

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
