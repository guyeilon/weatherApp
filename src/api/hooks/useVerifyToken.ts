import { serverApi } from '../userApi';
import useAuth from './useAuth';
import { IUser } from '../../types/user';
import { useState } from 'react';

const useVerifyToken = () => {
	const { auth } = useAuth();
	const [isTokenVerify, setIsTokenVerify] = useState<boolean>(false);

	const verifyToken = async () => {
		const response = await serverApi.post('/api/auth/verify-token/', { token: auth.accessToken });
		if (Object.keys(response.data).length === 0) setIsTokenVerify(true);
	};
	return { verifyToken, isTokenVerify };
};

export default useVerifyToken;
