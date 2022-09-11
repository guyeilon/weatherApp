import { useEffect } from 'react';

export const UsePreventScrollOutsideModal = (
	isModalOpen: boolean,
	modalRef: React.RefObject<HTMLDivElement | HTMLUListElement>
) => {
	useEffect(() => {
		const preventTouche = (e: TouchEvent) => {
			if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
				e.preventDefault();
			}
		};

		document.body.addEventListener('touchmove', preventTouche, { passive: true });

		return () => {
			document.body.removeEventListener('touchmove', preventTouche);
		};
	}, [isModalOpen]);

	useEffect(() => {
		const preventScroll = (e: WheelEvent) => {
			if (isModalOpen) {
				e.preventDefault();
				e.stopPropagation();
			}
		};

		const rootEl = document.getElementById('root');
		if (rootEl) {
			rootEl.addEventListener('wheel', preventScroll, { passive: false });
		}
		return () => {
			if (rootEl) {
				rootEl.removeEventListener('wheel', preventScroll);
			}
		};
	}, [isModalOpen]);
};
