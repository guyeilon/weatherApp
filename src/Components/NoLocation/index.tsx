import React from 'react';
import { SvgLocation } from '../../assets/Svg.styles';

import * as Styled from './styles';

export interface NoLocationProps {}

const NoLocation: React.FC<NoLocationProps> = Props => {
	return (
		<>
			<Styled.NoLocationWrapper>
				<SvgLocation width='120' height='120' />
				<Styled.header>Set up location</Styled.header>
				<Styled.Text>To identify your location please allow WeatherApp to know your location.</Styled.Text>
			</Styled.NoLocationWrapper>
		</>
	);
};

export default NoLocation;
