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
		console.log(modalRef.current?.scrollHeight);
		const checkIfClickedOutside = (e: MouseEvent) => {
			if (useCloseModal && isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
				console.log('isModalOpen?', isModalOpen);

				console.log('closing modal....');

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
