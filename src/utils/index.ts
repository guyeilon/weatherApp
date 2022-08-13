// convert celsius to fahrenheit degrees:

export const convertToC = (fahrenheit: number) => {
	let celsius = Math.round(((fahrenheit - 32) * 5) / 9);

	return celsius;
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
