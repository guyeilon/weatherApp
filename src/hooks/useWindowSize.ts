import { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '../constants';

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<{
		width: number;
		height: number;
	}>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		const handleResize = () => {
			clearTimeout(timeoutId);

			timeoutId = setTimeout(
				() =>
					setWindowSize({
						width: window.innerWidth,
						height: window.innerHeight,
					}),
				150
			);
		};

		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobile = windowSize.width <= MOBILE_WIDTH;
	const isDesktop = windowSize.width > MOBILE_WIDTH;

	return { windowSize, isMobile, isDesktop };
};
