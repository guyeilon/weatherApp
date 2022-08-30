import React, { useEffect, useState } from 'react';
import cloudImage from '../../assets/Svgs/cloud.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as Styled from './styles';
import { MAX_CLOUD_SPEED, MIN_CLOUD_SPEED } from './types';

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

	useEffect(() => {
		const newClouds: Cloud[] = [];
		for (let i = 0; i < cloudsNum; i++) {
			const positionY = Math.random() * 100;
			const delayTime = Math.random() * 10;
			const speed = Math.random() * MAX_CLOUD_SPEED + MIN_CLOUD_SPEED;

			const cloud = {
				positionY,
				delayTime,
				speed,
			};
			newClouds.push(cloud);
		}
		setClouds(newClouds);
	}, [cloudsNum]);

	return (
		<Styled.CloudsWrapper>
			{clouds &&
				clouds.map((cloud, idx) => {
					return (
						<Styled.CloudImg
							key={idx}
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
