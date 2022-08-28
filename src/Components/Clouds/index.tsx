import React, { useEffect, useState } from 'react';
import cloudImage from '../../assets/Svgs/cloud.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as Styled from './styles';

export interface CloudsProps {
	cloudsNum: number;
}

interface Cloud {
	positionY: number;
	delayTime: number;
	speed: number;
}

const Clouds: React.FC<CloudsProps> = ({ cloudsNum }) => {
	const [clouds, setClouds] = useState<Cloud[] | undefined>(undefined);

	const windowHeight = useWindowSize().height;
	useEffect(() => {
		console.log(windowHeight);

		const newClouds: Cloud[] = [];
		for (let i = 0; i < cloudsNum; i++) {
			const positionY = Math.random() * 100;
			const delayTime = Math.random() * 10;
			const speed = Math.random() * 15 + 5;

			const cloud = {
				positionY,
				delayTime,
				speed,
			};
			newClouds.push(cloud);
		}
		setClouds(newClouds);
	}, [cloudsNum, windowHeight]);

	return (
		<Styled.CloudsWrapper>
			{clouds &&
				clouds.map(cloud => {
					return (
						<Styled.CloudImg
							src={cloudImage}
							positionY={cloud.positionY}
							delayTime={cloud.delayTime}
							speed={cloud.speed}
						/>
					);
				})}
		</Styled.CloudsWrapper>
	);
};

export default Clouds;
