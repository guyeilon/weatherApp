import React from 'react';
import * as Styled from './styles';
import { motion } from 'framer-motion';

export interface HoverGridProps {}

const HoverGrid: React.FC<HoverGridProps> = Props => {
	return (
		<Styled.TransparentGrid>
			<Styled.col1
				as={motion.div}
				whileHover={{
					scale: 1.02,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			/>
			<Styled.col2
				as={motion.div}
				whileHover={{
					scale: 1.02,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			/>
			<Styled.col3
				as={motion.div}
				whileHover={{
					scale: 1.02,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			/>
			<Styled.col4
				as={motion.div}
				whileHover={{
					scale: 1.02,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			/>
			<Styled.col5
				as={motion.div}
				whileHover={{
					scale: 1.02,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			/>
		</Styled.TransparentGrid>
	);
};

export default HoverGrid;
