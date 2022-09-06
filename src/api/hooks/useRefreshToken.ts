import { serverApi } from '../userApi';
import useAuth from './useAuth';
import { IUser } from '../../types/user';

const useRefreshToken = () => {
	const { auth, setAuth } = useAuth();

	const refresh = async () => {
		const response = await serverApi.post('/api/auth/refresh-token/', { refresh: auth.refreshToken });
		setAuth((prev: IUser) => {
			console.log(JSON.stringify(prev));
			console.log(response.data.access);
			return { ...prev, accessToken: response.data.access };
		});

		return response.data.accessToken;
	};
	return refresh;
};

export default useRefreshToken;
