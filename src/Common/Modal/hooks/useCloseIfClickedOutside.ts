import React, { useEffect } from 'react';

export const useCloseModalIfClickedOutside = ({
	isModalOpen,
	modalRef,
	closeModalFunction,
	useCloseModal,
}: {
	isModalOpen: boolean;
	modalRef: React.RefObject<HTMLDivElement | HTMLUListElement>;
	closeModalFunction: () => void;
	useCloseModal: boolean;
}): void => {
	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			if (useCloseModal && isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
				closeModalFunction();
			}
		};
		if (isModalOpen) {
			document.body.addEventListener('click', checkIfClickedOutside, true);
		}

		return () => {
			document.body.removeEventListener('click', checkIfClickedOutside, true);
		};
	}, [isModalOpen, closeModalFunction, modalRef]);
};
