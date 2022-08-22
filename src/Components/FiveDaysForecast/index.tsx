import React, { useEffect, useRef, useState } from 'react';
import { FiveDaysForecastProps } from './types';
import * as Styled from './styles';
import { convertToC, getDay, getDayAndMonth } from '../../utils';

import useStore from '../../App/store';
import { SvgSunFlat } from '../../assets/Svg.styles';

import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';

const FiveDaysForecast: React.FC<FiveDaysForecastProps> = ({ fiveDaysData }) => {
	const store = useStore(state => state);

	const toggleTemperature = (temp: number) => {
		return store.degree === 'fahrenheit' ? temp : convertToC(temp);
	};

	let content;

	const fahrenheitDay = fiveDaysData?.map(day => day.dayTemp);
	const celsiusDay = fiveDaysData?.map(day => convertToC(day.dayTemp));
	const fahrenheitNight = fiveDaysData?.map(day => day.nightTemp);
	const celsiusNight = fiveDaysData?.map(day => convertToC(day.nightTemp));

	// const dayArray = fiveDaysData?.map(day => toggleTemperature(day.dayTemp));

	const [options, setOptions] = useState({
		colors: ['#fff'],

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
				fontSize: '24px',
				fontFamily: 'overpass, sans-serif',
				fontWeight: '500',
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
				enabled: true,
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
			size: [5, 5],
			colors: undefined,
			strokeColors: '#fff',
			strokeWidth: 2,
			strokeOpacity: 0.9,
			strokeDashArray: 0,
			fillOpacity: 1,
			discrete: [],

			radius: 2,
		},
		stroke: {
			width: [2, 2],
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
			<>
				<Styled.DailyData key={idx}>
					{date && <Styled.Day>{getDay(date)}</Styled.Day>}
					{date && <Styled.Date>{getDayAndMonth(date)}</Styled.Date>}
					<SvgSunFlat width='35' height='36' />
				</Styled.DailyData>
				<Styled.MoonIcon />
			</>
		);
	});

	return (
		<>
			<Styled.Header>5-days forecast</Styled.Header>
			<Styled.FiveDaysForecastWrapper>
				{content}
				<Styled.DayChart>
					{fiveDaysData && (
						<Chart options={options} series={seriesDay} type='line' height={300} width={880} />
					)}
				</Styled.DayChart>
				<Styled.NightChart>
					{fiveDaysData && (
						<Chart options={options} series={seriesNight} type='line' height={300} width={880} />
					)}
				</Styled.NightChart>
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
