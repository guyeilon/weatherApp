import { useEffect } from 'react';

export const UsePreventScrollOutsideModal = (isModalOpen: boolean) => {
	useEffect(() => {
		const preventTouche = (e: TouchEvent) => {
			if (isModalOpen) {
				e.preventDefault();
			}
		};

		document.body.addEventListener('touchmove', preventTouche, { passive: false });

		return () => {
			document.body.removeEventListener('touchmove', preventTouche);
		};
	}, [isModalOpen]);

	useEffect(() => {
		const preventScroll = (e: WheelEvent) => {
			if (isModalOpen) {
				e.preventDefault();
			}
		};

		document.body.addEventListener('wheel', preventScroll, { passive: false });

		return () => {
			document.body.removeEventListener('wheel', preventScroll);
		};
	}, [isModalOpen]);
};
