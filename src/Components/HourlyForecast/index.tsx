import React, { useEffect, useRef, useState } from 'react';
import { hourlyForecastProps } from './types';
import * as Styled from './styles';
import { convertMtoK, convertToC, getHour } from '../../utils';
import { getForecastIcon } from '../../constants';
import { Flex } from '../../design/helper.styles';
import useStore from '../../App/store';
import { SvgArrowLeft, SvgArrowRight, SvgWind } from '../../assets/Svg.styles';
import Button from '../../Common/Button';
import { motion } from 'framer-motion';

const HourlyForecast: React.FC<hourlyForecastProps> = ({ hourlyData }) => {
	const store = useStore(state => state);

	const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};
	const toggleSpeed = (wind: number) => {
		return store.degree === 'fahrenheit' ? `${wind} m/h` : `${convertMtoK(wind)} km/h`;
	};

	let content;

	const [selected, setSelected] = useState(0);

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		console.log(carousel.current);

		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	const [width, setWidth] = useState(0);

	content = (
		<Styled.Carousel ref={carousel} as={motion.div} drag='x' dragConstraints={{ right: 0, left: -width }}>
			{hourlyData.map((hour, idx) => {
				const icon = hour.icon;
				const temp = hour.temp;
				const wind = hour.wind;
				const date = hour.date;

				return (
					<Styled.hourlyData ref={ref} key={idx} as={motion.div}>
						<Styled.Card selected={idx === selected} as={motion.div}>
							{date && <Styled.Hour>{getHour(date)}</Styled.Hour>}

							{temp && (
								<Styled.Temp>
									{toggleTemperature(temp)}
									&deg;
								</Styled.Temp>
							)}
							{icon && <Styled.Icon src={getForecastIcon(icon)} />}
							{wind && (
								<Flex>
									<SvgWind width='22' height='22' />
									<Styled.Wind>{toggleSpeed(wind)}</Styled.Wind>
								</Flex>
							)}
						</Styled.Card>
					</Styled.hourlyData>
				);
			})}
		</Styled.Carousel>
	);

	const clickForward = () => {
		// carousel.current.scrollLeft += carousel.current.scrollWidth / 12;
		console.log();

		setSelected(selected + 1);
	};
	const clickBackwards = () => {
		carousel.current.scrollLeft -= carousel.current.scrollWidth / 10;
		setSelected(selected - 1);
	};

	return (
		<>
			<Styled.hourlyForecastWrapper>{content}</Styled.hourlyForecastWrapper>
			<Styled.BtnWrapper>
				<Button style={{ width: '40px' }} noHover onClick={clickBackwards}>
					<SvgArrowLeft width='40' height='40' />
				</Button>
				<Button style={{ width: '40px' }} noHover onClick={clickForward}>
					<SvgArrowRight width='40' height='40' />
				</Button>
			</Styled.BtnWrapper>
		</>
	);
};

export default HourlyForecast;
