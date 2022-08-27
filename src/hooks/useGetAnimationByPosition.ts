import { Variants } from 'framer-motion';

export const useGetAnimationByPosition = (position: string) => {
	const overlayVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	let panelVariants: Variants;

	switch (position) {
		case 'left':
			panelVariants = {
				hidden: { x: 1000 },
				visible: { x: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
			};
			break;
		case 'top':
			panelVariants = {
				hidden: { y: -1000 },
				visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
			};
			break;

		default:
			panelVariants = {
				hidden: { y: 1000 },
				visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
			};
			break;
	}

	return { overlayVariants, panelVariants };
};
