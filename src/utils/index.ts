// convert celsius to fahrenheit degrees:

import { UseQueryResult } from '@tanstack/react-query';
import { CityData } from '../types/forecastType';
import { MapData } from '../types/mapTypes';

export const convertToC = (fahrenheit: number) => {
	let celsius = Math.round(((fahrenheit - 32) * 5) / 9);

	return celsius;
};
// convert m/h to k/h :

export const convertMtoK = (mph: number) => {
	let kph = Math.round(mph / 1.6);

	return kph;
};

// convert time string to readable time:
export const getTime = (timestamp: number): string => {
	const date = new Date(timestamp);

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const year = date.getFullYear();
	const day = days[date.getDay()];
	const month = months[date.getMonth()];
	const dt = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	let minuteFix = minutes <= 9 ? '0' + minutes : minutes;
	let hourFix = hours <= 9 ? '0' + hours : hours;

	const formattedTime = `${day}, ${dt}-${month}-${year}, ${hourFix}:${minuteFix}`;

	return formattedTime;
};

export const getDay = (timestamp: number): string => {
	timestamp = timestamp * 1000;
	const date = new Date(timestamp);
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const day = days[date.getDay()];

	return day;
};
export const getHour = (timestamp: number) => {
	const date = new Date(timestamp);
	const hours = date.getHours();
	let hourFix = hours <= 9 ? '0' + hours : hours;

	const formattedHour = `${hourFix}:00`;

	return formattedHour;
};

export const getDayAndMonth = (timestamp: number) => {
	timestamp = timestamp * 1000;
	const date = new Date(timestamp);
	const month = date.getMonth() + 1;

	const day = date.getDate();

	const formattedDay = ` ${day}.${month}`;

	return formattedDay;
};

export const averageGeolocation = (citiesData: UseQueryResult<MapData, unknown>[]) => {
	let x = 0.0;
	let y = 0.0;
	let z = 0.0;
	citiesData?.map(city => {
		if (city.isSuccess) {
			let latitude = (city?.data?.location?.lat! * Math.PI) / 180;
			let longitude = (city?.data?.location?.lng! * Math.PI) / 180;
			x += Math.cos(latitude) * Math.cos(longitude);
			y += Math.cos(latitude) * Math.sin(longitude);
			z += Math.sin(latitude);
		}
	});

	let total = citiesData.length;

	x = x / total;
	y = y / total;
	z = z / total;

	let centralLongitude = Math.atan2(y, x);
	let centralSquareRoot = Math.sqrt(x * x + y * y);
	let centralLatitude = Math.atan2(z, centralSquareRoot);
	console.log(centralLongitude, centralLatitude);

	return {
		lat: (centralLatitude * 180) / Math.PI,
		lng: (centralLongitude * 180) / Math.PI,
	};
};
