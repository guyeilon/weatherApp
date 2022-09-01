/*=============================================
    CSS Values and variables used in App
=============================================*/

/*=============================================
=                  Colors                     =
=============================================*/

export const colors = {
	primary: {
		text: '#fff',
		background: '#48bae4',
		search: '#838baa',
		searchDark: '#444e72',
		modalText: '#444e72',
		secondaryModalText: '#838baa',
	},

	red: { danger: '#f0274b', lightDanger: '#ffe7e7' },

	modals: {
		primaryBg: '#fff',
		notificationBg: ' rgba(0, 0, 0, 0.8)',
		hover: '#f2f2f2',
	},
	toast: {
		error: '#ffe7e7',
		success: 'rgba(0, 0, 0, 0.8)',
	},
	inputs: {
		mainBg: '#f2f2f2',
		focusBg: '#fff',
		placeHolderColor: ' #bebebe',
		labelColor: '#838baa',
		textInputColor: '#4d4d4d',
		border: 'solid 1px #222',
		errorBorder: 'solid 1px #f0274b',
		errorColor: '#f0274b',
	},

	buttons: {
		primary: {
			bg: 'linear-gradient(to left,#47bfdf , #4a91ff )',
			bgDisabled: 'linear-gradient(to left,#47bfdf , #4a91ff )',
			bgHover: 'linear-gradient(to left,#47bfdf 20%, #4a91ff 80%)',
			textColor: 'rgba(255, 255, 255, 1)',
			textColorDisable: 'rgba(255, 255, 255, 0.4)',
		},
		secondary: {
			bg: 'rgba(255, 255, 255, 1)',
			bgDisabled: 'transparent',
			bgHover: 'rgba(255, 255, 255, 1)',
			textColor: '#444e72',
			textColorDisable: 'rgba(255, 255, 255, 1)',
		},

		links: {
			textColor: '#222',
		},
	},
	svgs: {
		primaryFill: 'rgba(255, 255, 255, 1)',
		primaryStroke: 'rgba(255, 255, 255, 1)',
		SecondaryFill: 'rgba(68, 78, 114, 1)',
		SecondaryStroke: 'rgba(68, 78, 114, 1)',
	},
	background: {
		// gradient: 'linear-gradient(207deg, #47bfdf 100%, #4a91ff -33%), linear-gradient(to bottom, #fff, #fff)',
		gradient: 'linear-gradient(189deg, rgba(71,191,223,1) 20%, rgba(74,145,255,1) 67%) no-repeat;',
	},
};

export const darkColors = {
	primary: {
		text: '#fff',
		background: '#1a2b55',
		search: '#838baa',
		searchDark: '#444e72',
		modalText: '#fff',
		secondaryModalText: '#fff',
	},

	red: { danger: '#f0274b', lightDanger: '#ffe7e7' },

	modals: {
		primaryBg: '#444e72',
		notificationBg: ' rgba(0, 0, 0, 0.8)',
		hover: '#838baa',
	},
	toast: {
		error: '#ffe7e7',
		success: 'rgba(0, 0, 0, 0.8)',
	},
	inputs: {
		mainBg: '#f2f2f2',
		focusBg: '#fff',
		placeHolderColor: ' #bebebe',
		labelColor: '#838baa',
		textInputColor: '#4d4d4d',
		border: 'solid 1px #222',
		errorBorder: 'solid 1px #f0274b',
		errorColor: '#f0274b',
	},

	buttons: {
		primary: {
			bg: 'linear-gradient(to left,#47bfdf , #4a91ff )',
			bgDisabled: 'linear-gradient(to left,#47bfdf , #4a91ff )',
			bgHover: 'linear-gradient(to left,#47bfdf 20%, #4a91ff 80%)',
			textColor: 'rgba(255, 255, 255, 1)',
			textColorDisable: 'rgba(255, 255, 255, 0.4)',
		},
		secondary: {
			bg: 'rgba(255, 255, 255, 1)',
			bgDisabled: 'transparent',
			bgHover: 'rgba(255, 255, 255, 1)',
			textColor: '#444e72',
			textColorDisable: 'rgba(255, 255, 255, 1)',
		},

		links: {
			textColor: '#222',
		},
	},
	svgs: {
		primaryFill: 'rgba(255, 255, 255, 1)',
		primaryStroke: 'rgba(255, 255, 255, 1)',
		SecondaryFill: 'rgba(68, 78, 114, 1)',
		SecondaryStroke: 'rgba(68, 78, 114, 1)',
	},
	background: {
		// gradient: ' linear-gradient(207deg, #191634 100%, #1e437c -33%), linear-gradient(to bottom, #fff, #fff);',
		gradient: ' linear-gradient(189deg, rgba(30,67,124,1) 15%, rgba(25,22,52,1) 78%) , no-repeat',
	},
};

export type AppColorsType = typeof colors;

/*=====  End of Colors  ======*/

/*=============================================
=                  Gradients                  =
=============================================*/
export const allGradients = {
	buttonBlue: 'linear-gradient(to left,#47bfdf, #4a91ff)',
};
export type AppGradientsType = typeof allGradients;

/*=============================================
=                Typography                   =
=============================================*/

/* Font sizes */

export const textFontSizes = {
	xxs: '1.2rem', // 12px
	xs: '1.4rem', // 14px
	sm: '1.6rem', // 16px
	base: '1.8rem', // 18px
	lg: '2.4rem', // 24px
	xl: '3.2rem', // 32px
	xxl: '5rem', // 50px
};
export type AppTextFSType = typeof textFontSizes;

/* Heading font sizes */
export const headingFontSizes = {
	h1: '5rem', // 50px
	h2: '3.2rem', // 32px
	h3: '2.4rem', // 24px
	h4: '1.8rem', // 18px
	h5: '1.4rem', // 14px
	h6: '0.75rem', // 12px
};
export type AppHeadingFSType = typeof headingFontSizes;

/* Font weights */

export const fontWeights = {
	light: 300,
	normal: 400,
	medium: 500,
	bold: 700,
};
export type AppFontWeightType = typeof fontWeights;
/*=====  End of Typography  ======*/

/*=============================================
=            Breakpoints                      =
=============================================*/

export const responsiveBreakPoints = {
	phone: 'max-width: 970px',
	abovePhone: 'min-width: 971px',
	tablet: '971px < width < 1280px',
	desktop: 'min-width: 1281px',
	underDesktop: 'max-width: 1280px',
};

export type AppBreakpointsType = typeof responsiveBreakPoints;

/*=====  End of Breakpoints  ======*/

/*=============================================
=            Spacing                          =
=============================================*/

export const spacing = {
	none: '0rem',
	xxxs: '0.4rem', // 4px
	xxs: '0.8rem', // 8px
	xs: '1.2rem', // 12px
	sm: '1.4rem', // 14px
	md: '1.6rem', // 16px
	lg: '2rem', // 20px
	xl: '2.4rem', // 24px
	xxl: '3.2rem', // 32px
};
export type AppSpacingType = typeof spacing;
/*=====  End of Spacing  ======*/

/*=============================================
=            Other Styles                     =
=============================================*/

/* Border radius */
export const borderRadii = {
	base: '15px',
	modal: '30px',
	modalUp: '30px 30px 0 0',
	button: '10px',
	input: '10px',
	toggle: '100px',
};
export type AppBorderRadiiType = typeof borderRadii;

/* Box Shadows */

export const boxShadows = {
	base: ' 0 4px 40px 0 rgba(0, 0, 0, 0.16)',
	modal: ' 0 4px 80px 0 rgba(0, 0, 0, 0.16)',
	button: '-4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);',

	searchInput: ' inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1)',

	notificationModal: '  0 2px 20px 0 rgba(0, 0, 0, 0.16);',
	desktopNavbar: '0 1px 2px 0 rgba(0, 0, 0, 0.1);',
	text: '-2px 3px 1px rgba(0, 0, 0, 0.1), -1px 1px 2px rgba(255, 255, 255, 0.25);',
};
export type AppBoxShadowsType = typeof boxShadows;
/* Z-indexes */
export const zIndexes = {
	highestPriority: 777,
	navigation: 78,
	modal: 77,
	lowPriority: 7,
};
export type AppZIndexType = typeof zIndexes;
/*=====  End of Other Styles  ======*/
