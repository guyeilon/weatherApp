import { useEffect, useState } from 'react';

export const useWheelScroll = ({
	scrollRef,
	isModalOpen,
}: {
	scrollRef: React.RefObject<HTMLUListElement>;
	isModalOpen: boolean;
}) => {
	const el = scrollRef.current;
	useEffect(() => {
		const handleScroll = (e: any) => {
			e.preventDefault();
			if (isModalOpen) {
				if (e.deltaY > 0) {
					el?.scrollBy(0, 20);
				} else {
					el?.scrollBy(0, -20);
				}
			}
		};
		document.body.addEventListener('wheel', handleScroll, { passive: false });
		return () => {
			document.body.removeEventListener('wheel', handleScroll);
		};
	}, [isModalOpen]);
};
