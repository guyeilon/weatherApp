import { useEffect, useState } from 'react';
import { DailyData } from '../../../../types/forecastType';
import { convertToC } from '../../../../utils';

export const useChartData = (
	data: DailyData,
	isExpanded: boolean | undefined,
	isDarkMode: boolean,
	isFahrenheit: boolean
) => {
	const fahrenheitDay = data?.map(day => day.dayTemp);
	const celsiusDay = data?.map(day => convertToC(day.dayTemp));
	const fahrenheitNight = data?.map(day => day.nightTemp);
	const celsiusNight = data?.map(day => convertToC(day.nightTemp));

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
		if (isFahrenheit) {
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
	}, [isFahrenheit]);

	return { options, seriesDay, seriesNight };
};
