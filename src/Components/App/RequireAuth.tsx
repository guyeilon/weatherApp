import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../zustand/hooks/useUser';

const RequireAuth = () => {
	const { user } = useUser();

	const location = useLocation();

	return user?.accessToken ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
export default RequireAuth;
