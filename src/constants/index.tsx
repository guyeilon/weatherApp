import { imagesArray } from './images';
import stars from '../assets/Icon/stars.png';

export { default as images } from './images';

export const getForecastIcon = (iconNumber: number) => {
	let res;
	for (var i = 0; i < imagesArray.length; i++) {
		if (imagesArray[i].range.includes(iconNumber)) {
			res = imagesArray[i].name;
			break;
		} else {
			res = stars;
		}
	}
	return res;
};
