import React, { useEffect, useRef, useState } from 'react';
import { FiveDaysForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay, getDayAndMonth } from '../../utils';

import { useStore } from '../../App/store';

import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';

const FiveDaysForecast: React.FC<FiveDaysForecastProps> = ({ fiveDaysData, isExpanded }) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	let content;

	const isDarkMode = store.theme === 'dark';

	const fahrenheitDay = fiveDaysData?.map(day => day.dayTemp);
	const celsiusDay = fiveDaysData?.map(day => convertToC(day.dayTemp));
	const fahrenheitNight = fiveDaysData?.map(day => day.nightTemp);
	const celsiusNight = fiveDaysData?.map(day => convertToC(day.nightTemp));

	const [options, setOptions] = useState({
		colors: isExpanded ? ['#bebebe'] : ['#fff'],

		xaxis: {
			categories: [1, 2, 3, 4, 5],

			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
			// max: Math.max(...fahrenheitDay) + 1,
			// min: Math.min(...fahrenheitDay) - 1,
		},
		grid: {
			show: false,
			yaxis: {
				lines: {
					show: false,
				},
			},
			row: {},
		},
		legend: {
			show: true,
		},
		dataLabels: {
			formatter: function (value: any) {
				return value + ` °`;
			},
			enabled: true,
			offsetY: -10,
			style: {
				fontSize: isExpanded ? '14px' : '24px',
				fontFamily: 'overpass, sans-serif',
				fontWeight: '500',
				colors: isExpanded ? (isDarkMode ? ['#fff'] : ['#444e72']) : ['#fff'],
			},
			background: {
				enabled: false,
				foreColor: '#fff',
				dropShadow: {
					enabled: false,
				},
			},
		},
		chart: {
			id: 'dayChart',
			animations: {
				enabled: isExpanded ? false : true,
				dynamicAnimation: {
					enabled: true,
					speed: 800,
				},
				animateGradually: {
					enabled: true,
				},
			},
			toolbar: {
				show: false,
			},
			width: '100%',
			height: 'auto',
		},
		tooltip: {
			enabled: false,
		},
		markers: {
			size: isExpanded ? [3, 3] : [5, 5],
			colors: undefined,
			strokeColors: isExpanded ? '#bebebe' : '#fff',
			strokeWidth: isExpanded ? 2 : 2,
			strokeOpacity: 0.9,
			strokeDashArray: 0,
			fillOpacity: 1,
			discrete: [],

			radius: 2,
		},
		stroke: {
			width: isExpanded ? [1, 1] : [2, 2],
		},
	});
	const [seriesDay, setSeriesDay] = useState([
		{
			data: fahrenheitDay,
		},
	]);
	const [seriesNight, setSeriesNight] = useState([
		{
			data: fahrenheitNight,
		},
	]);

	useEffect(() => {
		if (store.degree === 'fahrenheit') {
			setSeriesDay([
				{
					data: fahrenheitDay,
				},
			]);
			setSeriesNight([
				{
					data: fahrenheitNight,
				},
			]);
		} else {
			setSeriesDay([
				{
					data: celsiusDay,
				},
			]);
			setSeriesNight([
				{
					data: celsiusNight,
				},
			]);
		}
	}, [store.degree]);

	content = fiveDaysData.map((day, idx) => {
		const dayTemp = day.dayTemp;
		const nightTemp = day.nightTemp;
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
					{fiveDaysData && (
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
					{fiveDaysData && (
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
