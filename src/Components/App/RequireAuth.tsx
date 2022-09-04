import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../User/hooks/useUser';

const RequireAuth = () => {
	const location = useLocation();
	const { user } = useUser();
	return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
export default RequireAuth;
