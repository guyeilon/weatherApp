import { DefaultTheme } from 'styled-components';
import {
	allGradients,
	borderRadii,
	boxShadows,
	colors,
	darkColors,
	fontWeights,
	headingFontSizes,
	responsiveBreakPoints,
	spacing,
	textFontSizes,
	zIndexes,
} from './design-variables';

export const useSystemDesign = (): {
	lightTheme: DefaultTheme;
	darkTheme: DefaultTheme;
} => {
	const lightTheme: DefaultTheme = {
		theme: 'light',
		colors: colors,
		gradients: allGradients,
		textFontSize: textFontSizes,
		headingFontSize: headingFontSizes,
		fontWeights: fontWeights,
		media: responsiveBreakPoints,
		spacing: spacing,
		border: borderRadii,
		boxShadows: boxShadows,
		zIndex: zIndexes,
	};
	const darkTheme: DefaultTheme = {
		theme: 'dark',
		colors: darkColors,
		gradients: allGradients,
		textFontSize: textFontSizes,
		headingFontSize: headingFontSizes,
		fontWeights: fontWeights,
		media: responsiveBreakPoints,
		spacing: spacing,
		border: borderRadii,
		boxShadows: boxShadows,
		zIndex: zIndexes,
	};

	return { lightTheme, darkTheme };
};
