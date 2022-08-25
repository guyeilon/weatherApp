import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export interface LoaderProps {
	className?: string;
}

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	margin: 0 auto;

	width: 269px;
	text-align: center;
`;

const Loader: React.FC<LoaderProps> = ({ className }) => {
	const moonVariants = {
		hidden: {
			fill: '#FBFF22',
			rotate: 360,
			opacity: 1,
			transition: {
				delay: 0.5,
			},
		},

		visible: {
			stroke: '#FBFF22',

			opacity: 1,
			pathLength: 1,
			rotate: 0,
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: 'easeOut',
			},
		},
	};

	return (
		<Wrapper>
			<motion.svg
				width='77'
				height='76'
				viewBox='0 0 77 76'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				variants={moonVariants}
				initial='hidden'
				animate='visible'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M74 40.5478C71.3069 42.5156 68.2751 44.0678 65.0262 45.1421C48.668 50.5692 30.5925 42.9125 24.6545 28.0422C23.2287 24.4823 22.595 20.7013 22.7902 16.9178C22.9854 13.1343 24.0056 9.42348 25.7918 6C15.5586 13.4836 11.1738 26.3215 15.9001 38.1554C21.8382 53.0256 39.9136 60.6823 56.2718 55.2553C64.0897 52.6684 70.4626 47.3814 74 40.5478Z'
					fill='#FBFF22'
				/>
			</motion.svg>
		</Wrapper>
	);
};

export default Loader;
