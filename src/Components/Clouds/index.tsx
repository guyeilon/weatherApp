import React, { useEffect, useState } from 'react';
import cloudImage from '../../assets/Svgs/cloud.svg';
import * as Styled from './styles';

export interface CloudsProps {
	cloudsNum: number;
}

interface Cloud {
	positionY: number;
	delayTime: number;
	speed: number;
	size: string;
}

const Clouds: React.FC<CloudsProps> = ({ cloudsNum }) => {
	const [clouds, setClouds] = useState<Cloud[] | undefined>(undefined);

	useEffect(() => {
		const newClouds: Cloud[] = [];
		for (let i = 0; i < cloudsNum; i++) {
			const positionY = Math.random() * 100;
			const delayTime = Math.random() * 10;
			const speed = Math.random() * 15 + 5;
			const size = (speed * 100).toString();
			const cloud = {
				positionY,
				delayTime,
				speed,
				size,
			};
			newClouds.push(cloud);
		}
		setClouds(newClouds);
	}, [cloudsNum]);

	return (
		<>
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
		</>
	);
};

export default Clouds;
