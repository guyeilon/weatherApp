import React, { useEffect, useRef, useState } from 'react';
import { FiveDaysForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay, getDayAndMonth } from '../../../utils';
import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { useChartData } from './hooks/useChartData';
import { usePreference } from '../../../hooks/usePreference';

const FiveDaysForecast: React.FC<FiveDaysForecastProps> = ({ data, isExpanded }) => {
	const { preference } = usePreference();

	let content;

	const isDarkMode = preference.theme === 'dark';
	const isFahrenheit = preference.degree === 'fahrenheit';

	const { options, seriesDay, seriesNight } = useChartData(data, isExpanded, isDarkMode, isFahrenheit);

	content = data.map((day, idx) => {
		const date = day.date;

		return (
			<Styled.DailyData key={idx}>
				{date && <Styled.Day>{getDay(date)}</Styled.Day>}
				{date && <Styled.Date>{getDayAndMonth(date)}</Styled.Date>}
				<Styled.SunIcon />
			</Styled.DailyData>
		);
	});

	return (
		<>
			<Styled.Header>5-days forecast</Styled.Header>
			<Styled.FiveDaysForecastWrapper>
				{content}
				<Styled.DayChart>
					{data && (
						<Chart
							options={options}
							series={seriesDay}
							type='line'
							height={isExpanded ? 100 : 300}
							width={isExpanded ? 300 : 880}
						/>
					)}
				</Styled.DayChart>
				<Styled.NightChart>
					{data && (
						<Chart
							options={options}
							series={seriesNight}
							type='line'
							height={isExpanded ? 100 : 300}
							width={isExpanded ? 300 : 880}
						/>
					)}
				</Styled.NightChart>
				<Styled.MoonIcon />
				<Styled.MoonIcon />
				<Styled.MoonIcon />
				<Styled.MoonIcon />
				<Styled.MoonIcon />
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
			</Styled.FiveDaysForecastWrapper>
		</>
	);
};

export default FiveDaysForecast;
