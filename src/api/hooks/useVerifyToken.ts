import { serverApi } from '../userApi';
import { useState } from 'react';
import { useUserStore } from '../../zustand/store';

const useVerifyToken = () => {
	const { user } = useUserStore();
	const [isTokenVerify, setIsTokenVerify] = useState<boolean>(false);

	const verifyToken = async () => {
		const response = await serverApi.post('/api/auth/verify-token/', { token: user?.accessToken });
		if (Object.keys(response.data).length === 0) setIsTokenVerify(true);
	};
	return { verifyToken, isTokenVerify };
};

export default useVerifyToken;
