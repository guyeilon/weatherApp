import DesktopNavbar from '../NavbarDesktop';
import MobileNavbar from '../NavbarMobile';
import { useWindowSize } from '../../hooks/useWindowSize';

const Navbar: React.FC = () => {
	const { isMobile } = useWindowSize();

	return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
