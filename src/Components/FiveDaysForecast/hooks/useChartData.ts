import { useEffect, useState } from 'react';
import { DailyData } from '../../../types/forecastType';
import { convertToC } from '../../../utils';
import { usePreference } from '../../../zustand/hooks/usePreference';

export const useChartData = (fiveDaysData: DailyData[], isExpanded: boolean | undefined, isSuccess: boolean) => {
	const { isDarkMode, isFahrenheit } = usePreference();
	const dayTemps = isFahrenheit
		? fiveDaysData.map(day => day.dayTemp)
		: fiveDaysData.map(day => convertToC(day.dayTemp));
	const nightTemps = isFahrenheit
		? fiveDaysData.map(day => day.nightTemp)
		: fiveDaysData.map(day => convertToC(day.nightTemp));

	const [options, setOptions] = useState({
		colors: isExpanded ? ['#bebebe'] : ['#fff'],

		responsive: [
			{
				breakpoint: 414,
				options: {
					chart: {
						width: 300,
						height: 100,
					},
				},
			},
			{
				breakpoint: 650,
				options: {
					chart: {
						width: 350,
						height: 100,
					},
				},
			},
			{
				breakpoint: 750,
				options: {
					chart: {
						width: 450,
						height: 100,
					},
				},
			},
			{
				breakpoint: 980,
				options: {
					chart: {
						width: 580,
						height: 100,
					},
				},
			},

			{
				breakpoint: 1180,
				options: {
					chart: {
						width: 780,
						height: 100,
					},
				},
			},
			{
				breakpoint: 1280,
				options: {
					chart: {
						width: 880,
						height: 300,
					},
				},
			},
			{
				breakpoint: 1080,
				options: {
					chart: {
						width: 680,
						height: 300,
					},
				},
			},
			{
				breakpoint: 5000,
				options: {
					chart: {
						width: 880,
						height: 300,
					},
				},
			},
		],

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
			size: isExpanded ? [1, 1] : [5, 5],
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
			data: dayTemps,
		},
	]);
	const [seriesNight, setSeriesNight] = useState([
		{
			data: nightTemps,
		},
	]);

	useEffect(() => {
		setSeriesDay([
			{
				data: dayTemps,
			},
		]);
		setSeriesNight([
			{
				data: nightTemps,
			},
		]);
	}, [isFahrenheit, isSuccess]);
	useEffect(() => {
		setOptions({
			colors: isExpanded ? ['#bebebe'] : ['#fff'],

			responsive: [
				{
					breakpoint: 414,
					options: {
						chart: {
							width: 300,
							height: 100,
						},
					},
				},
				{
					breakpoint: 650,
					options: {
						chart: {
							width: 350,
							height: 100,
						},
					},
				},
				{
					breakpoint: 750,
					options: {
						chart: {
							width: 450,
							height: 100,
						},
					},
				},
				{
					breakpoint: 980,
					options: {
						chart: {
							width: 580,
							height: 100,
						},
					},
				},

				{
					breakpoint: 1180,
					options: {
						chart: {
							width: 780,
							height: 100,
						},
					},
				},
				{
					breakpoint: 1280,
					options: {
						chart: {
							width: 880,
							height: 300,
						},
					},
				},
				{
					breakpoint: 1080,
					options: {
						chart: {
							width: 680,
							height: 300,
						},
					},
				},
				{
					breakpoint: 5000,
					options: {
						chart: {
							width: 880,
							height: 300,
						},
					},
				},
			],

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
				size: isExpanded ? [1, 1] : [5, 5],
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
	}, [isExpanded]);

	return { options, seriesDay, seriesNight };
};
