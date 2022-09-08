import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MOBILE_WIDTH } from '../../constants';

const Navbar: React.FC = () => {
	const { width: screenWidth } = useWindowSize();

	return <>{screenWidth <= MOBILE_WIDTH ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default Navbar;
