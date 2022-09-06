import { createContext, ReactElement, useState } from 'react';
import { IUser } from '../types/user';

const AuthContext = createContext<any>({});

export const AuthProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
	const [auth, setAuth] = useState(
		null
		// {	email: '',
		// 	first_name: '',
		// 	last_name: '',
		// 	id: undefined,
		// 	accessToken: '',}
	);

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
