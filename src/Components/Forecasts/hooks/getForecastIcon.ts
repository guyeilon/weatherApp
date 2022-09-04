import { imagesArray } from '../../../constants/images';

export const getForecastIcon = (iconNumber: number) => {
	let res;

	for (var i = 0; i < imagesArray.length; i++) {
		if (imagesArray[i].range.includes(iconNumber)) {
			res = imagesArray[i].name;
			break;
		} else {
			res = imagesArray[0].name;
		}
	}
	return res;
};
