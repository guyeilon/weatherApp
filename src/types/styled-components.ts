import 'styled-components';
import {
	AppBorderRadiiType,
	AppBoxShadowsType,
	AppBreakpointsType,
	AppColorsType,
	AppFontWeightType,
	AppGradientsType,
	AppHeadingFSType,
	AppSpacingType,
	AppTextFSType,
	AppZIndexType,
} from '../design/design-variables';

declare module 'styled-components' {
	export interface DefaultTheme {
		theme: 'dark' | 'light';
		colors: AppColorsType;
		spacing: AppSpacingType;
		textFontSize: AppTextFSType;
		fontWeights: AppFontWeightType;
		headingFontSize: AppHeadingFSType;
		gradients: AppGradientsType;
		media: AppBreakpointsType;
		border: AppBorderRadiiType;
		zIndex: AppZIndexType;
		boxShadows: AppBoxShadowsType;
	}
}
