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
import { useWindowSize } from '../../hooks/useWindowSize';

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

	const [width, setWidth] = useState(0);

	const windowSize = useWindowSize();

	const handleTouch = (idx: number) => {
		// if (windowSize.width && windowSize.width <= 970) {
		setSelected(idx);
		// }
	};

	content = (
		<Styled.Carousel
			ref={carousel}
			as={motion.div}
			drag='x'
			dragConstraints={{ right: 0, left: -width }}
			whileTap={{ cursor: 'grabbing' }}>
			{hourlyData.map((hour, idx) => {
				const icon = hour.icon;
				const temp = hour.temp;
				const wind = hour.wind;
				const date = hour.date;

				return (
					<Styled.hourlyData key={idx} as={motion.div} whileTap={{ cursor: 'grabbing' }}>
						<Styled.Card
							selected={idx === selected}
							as={motion.div}
							whileTap={{ cursor: 'grabbing' }}
							onClick={() => handleTouch(idx)}>
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
		</Styled.Carousel>
	);

	return (
		<>
			<Styled.hourlyForecastWrapper ref={ref}>{content}</Styled.hourlyForecastWrapper>
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