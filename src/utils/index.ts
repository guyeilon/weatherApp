// convert fah to cel degrees:
export const fToCTemp = (fTemp: number) => {
	const cTemp = Math.round(((fTemp - 32) * 5) / 9);
	return cTemp;
};

// convert time string to readable time:
export const getTime = (timestamp: number) => {
	const date = new Date(timestamp);

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const year = date.getFullYear();
	const day = days[date.getDay()];
	const month = months[date.getMonth()];
	const dt = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const formattedTime = `${day}, ${dt}-${month}-${year}, ${hours}:${minutes}`;

	return formattedTime;
};
