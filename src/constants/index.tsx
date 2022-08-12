import { imagesArray } from './images';
import stars from '../assets/Icon/stars.png';
import { dataType } from '../Components/DailyForecast/types';

export { default as images } from './images';

export const getForecastIcon = (iconNumber: number) => {
	let res;

	for (var i = 0; i < imagesArray.length; i++) {
		if (imagesArray[i].range.includes(iconNumber)) {
			res = imagesArray[i].name;
			break;
		}
		//  else {
		// 	res = ;
		// }
	}
	return res;
};
