import DesktopNavbar from '../NavbarDesktop';
import MobileNavbar from '../NavbarMobile';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MOBILE_WIDTH } from '../../constants';

const Navbar: React.FC = () => {
	const { width: screenWidth } = useWindowSize();

	return <>{screenWidth <= MOBILE_WIDTH ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default Navbar;
