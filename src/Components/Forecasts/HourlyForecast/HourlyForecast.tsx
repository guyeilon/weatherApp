import React, { useEffect, useRef, useState } from 'react';
import { hourlyForecastProps } from './types';
import * as Styled from './styles';
import { convertMtoK, convertToC, getHour } from '../../../utils';
import { Flex } from '../../../design/helper.styles';
import { SvgArrowLeft, SvgArrowRight } from '../../../assets/Svg.styles';
import Button from '../../../Common/Button';
import { motion } from 'framer-motion';
import { getForecastIcon } from '../hooks/getForecastIcon';
import { usePreference } from '../../../hooks/usePreference';

const HourlyForecast: React.FC<hourlyForecastProps> = ({ data }) => {
	const { preference, isFahrenheit } = usePreference();

	const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

	const toggleTemperature = (temp: number) => {
		return isFahrenheit ? temp : convertToC(temp);
	};
	const toggleSpeed = (wind: number) => {
		return isFahrenheit ? `${wind} m/h` : `${convertMtoK(wind)} km/h`;
	};

	let content;

	const [selected, setSelected] = useState(0);
	const [width, setWidth] = useState(0);

	const clickForward = () => {
		ref.current.scrollLeft += 220;
		if (selected < 11) {
			setSelected(selected + 1);
		}
	};
	const clickBackwards = () => {
		ref.current.scrollLeft -= 220;
		if (selected > 0) {
			setSelected(selected - 1);
		}
	};

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	const handleTouch = (idx: number) => {
		setSelected(idx);
	};

	content = (
		<Styled.InnerCarousel ref={carousel} as={motion.div} drag='x' dragConstraints={{ right: 0, left: -width }}>
			{data.map((hour, idx) => {
				const icon = hour.icon;
				const temp = hour.temp;
				const wind = hour.wind;
				const date = hour.date;

				return (
					<Styled.hourlyData key={idx} as={motion.div} whileTap={{ cursor: 'grabbing' }}>
						<Styled.Card selected={idx === selected} onClick={() => handleTouch(idx)}>
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
									<Styled.WindIcon />
									<Styled.Wind>{toggleSpeed(wind)}</Styled.Wind>
								</Flex>
							)}
						</Styled.Card>
					</Styled.hourlyData>
				);
			})}
		</Styled.InnerCarousel>
	);

	return (
		<>
			<Styled.hourlyForecastCarousel ref={ref} as={motion.div}>
				{content}
			</Styled.hourlyForecastCarousel>
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
