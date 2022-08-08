export const fToCTemp = (fTemp: number) => {
	const cTemp = Math.round(((fTemp - 32) * 5) / 9);
	return cTemp;
};
