import { default as colors } from 'tailwindcss/colors';

import type { Config } from 'tailwindcss';
const { getContrastingHex } = require('color-contrast-picker');
const defaultTheme = require('tailwindcss/defaultTheme');
const shadesOf = require('tailwind-shades');

export const BLUE = shadesOf('#255CC0');
export const YELLOW = shadesOf('#FFC800');
export const ORANGE = shadesOf('#FF8427');
export const GREEN = shadesOf('#98CE00');
export const RED = shadesOf('#FF3562');
export const TEAL = shadesOf('#14B8A6');
export const GRAY = shadesOf('#858585');

const themeColors = {
	primary: TEAL,
	secondary: ORANGE,
	accent: BLUE,
	success: GREEN,
	warning: YELLOW,
	error: RED,
	neutral: GRAY,
};

export const LIGHT_THEME = {
	primary: TEAL[500],
	'primary-content': getContrastingHex(TEAL[500], 7),
	secondary: ORANGE[500],
	'secondary-content': getContrastingHex(ORANGE[500], 7),
	accent: BLUE[500],
	'accent-content': getContrastingHex(BLUE[500], 5),
	neutral: colors.slate[800],
	'neutral-content': colors.slate[300],
	'base-100': colors.slate[100],
	'base-200': colors.slate[200],
	'base-300': colors.slate[300],
	'base-content': colors.slate[800],
	info: BLUE[500],
	'info-content': getContrastingHex(BLUE[500], 5),
	success: GREEN[500],
	'success-content': getContrastingHex(GREEN[500], 8),
	warning: YELLOW[500],
	'warning-content': getContrastingHex(YELLOW[500], 8),
	error: RED[500],
	'error-content': getContrastingHex(RED[500], 5),
};

export const DARK_THEME = {
	primary: TEAL[600],
	'primary-content': getContrastingHex(TEAL[600], 5),
	secondary: ORANGE[500],
	'secondary-content': getContrastingHex(ORANGE[500], 7),
	accent: BLUE[600],
	'accent-content': getContrastingHex(BLUE[600], 5),
	neutral: colors.slate[300],
	'neutral-content': colors.slate[900],
	'base-100': colors.slate[700],
	'base-200': colors.slate[800],
	'base-300': colors.slate[900],
	'base-content': colors.slate[300],
	info: BLUE[600],
	'info-content': getContrastingHex(BLUE[600], 5),
	success: GREEN[600],
	'success-content': getContrastingHex(GREEN[600], 5),
	warning: YELLOW[600],
	'warning-content': getContrastingHex(YELLOW[600], 5),
	error: RED[600],
	'error-content': getContrastingHex(RED[600], 4),
};

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx,svg}',
		// './node_modules/tw-elements-react/dist/js/**/*.js',
	],

	theme: {
		fontFamily: {
			sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
			system: [...defaultTheme.fontFamily.sans],
			mono: ['var(--font-inconsolata)', ...defaultTheme.fontFamily.mono],
		},
		fontSize: {
			sm: ['clamp(0.89rem, 0vw + 0.89rem, 0.89rem)', '1.5'],
			base: ['clamp(1rem, 0.28vw + 0.94rem, 1.19rem)', '1.5'],
			xl: ['clamp(1.13rem, 0.69vw + 0.99rem, 1.58rem)', '1.3'],
			'2xl': ['clamp(1.27rem, 1.28vw + 1.01rem, 2.11rem)', '1.3'],
			'3xl': ['clamp(1.42rem, 2.1vw + 1rem, 2.81rem)', '1.3'],
			'4xl': ['clamp(1.6rem, 3.25vw + 0.95rem, 3.75rem)', '1.2'],
			'5xl': ['clamp(1.8rem, 4.84vw + 0.83rem, 5rem)', '1.1'],
			'6xl': ['clamp(2.03rem, 7.02vw + 0.62rem, 6.66rem)', '1.1'],
			'7xl': ['clamp(2.28rem, 10vw + 0.28rem, 8.88rem)', '1.1'],
			'8xl': ['clamp(2.57rem, 14.05vw + -0.24rem, 11.84rem)', '1.1'],
			'9xl': ['clamp(2.89rem, 19.54vw + -1.02rem, 15.78rem)', '1.1'],
		},
		screens: {
			sm: '576px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1376px',
			// => @media (min-width: 1388px) { ... }

			'2xl': '1920px',
			// => @media (min-width: 1536px) { ... }
		},

		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				primary: { DEFAULT: TEAL[500], ...TEAL },
				primaryContent: {
					light: LIGHT_THEME['primary-content'],
					dark: DARK_THEME['primary-content'],
				},
				secondary: ORANGE,
				secondaryContent: {
					light: LIGHT_THEME['secondary-content'],
					dark: DARK_THEME['secondary-content'],
				},
				accent: BLUE,
				accentContent: {
					light: LIGHT_THEME['accent-content'],
					dark: DARK_THEME['accent-content'],
				},
				info: BLUE,
				infoContent: {
					light: LIGHT_THEME['info-content'],
					dark: DARK_THEME['info-content'],
				},
				success: GREEN,
				successContent: {
					light: LIGHT_THEME['success-content'],
					dark: DARK_THEME['success-content'],
				},
				warning: YELLOW,
				warningContent: {
					light: LIGHT_THEME['warning-content'],
					dark: DARK_THEME['warning-content'],
				},
				error: colors.red,
				errorContent: {
					light: LIGHT_THEME['error-content'],
					dark: DARK_THEME['error-content'],
				},
			},
			fontFamily: {
				sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
				display: [
					'var(--font-poppins)',
					...defaultTheme.fontFamily.sans,
				],
				system: [...defaultTheme.fontFamily.sans],
				mono: [
					'var(--font-inconsolata)',
					...defaultTheme.fontFamily.mono,
				],
			},
			fontSize: {
				icon: [
					'0.8em',
					{
						lineHeight: '1',
					},
				],
			},
			maxWidth: {
				screen: '100vw',
			},
			width: {
				'full-pg': 'calc(100% + var(--page-gutter))',
			},
			boxShadow: {
				DEFAULT: `0px 0.3px 0.3px hsl(var(--shadow-color) / 0.36), 0px 1.1px 1.2px -0.8px hsl(var(--shadow-color) / 0.36), 0px 2.7px 3px -1.7px hsl(var(--shadow-color) / 0.36), 0.1px 6.5px 7.3px -2.5px hsl(var(--shadow-color) / 0.36)`,
				sm: `0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36), 0px 0.9px 1px -1.1px hsl(var(--shadow-color) / 0.38), 0px 2.1px 2.4px -2.2px hsl(var(--shadow-color) / 0.41)`,

				lg: `0px 0.2px 0.2px hsl(var(--shadow-color) / 0.34), 0px 0.9px 1px -0.4px hsl(var(--shadow-color) / 0.34), 0px 1.8px 2px -0.7px hsl(var(--shadow-color) / 0.34), 0px 2.9px 3.3px -1.1px hsl(var(--shadow-color) / 0.34), 0.1px 4.6px 5.2px -1.4px hsl(var(--shadow-color) / 0.34), 0.1px 7.2px 8.1px -1.8px hsl(var(--shadow-color) / 0.34), 0.2px 10.9px 12.3px -2.1px hsl(var(--shadow-color) / 0.34), 0.3px 16.1px 18.1px -2.5px hsl(var(--shadow-color) / 0.34);`,
			},
			strokeWidth: {
				'10': '10px',
				'15': '15px',
				'20': '20px',
				'30': '30px',
			},
			aspectRatio: {
				tablet: '768 / 1024',
				phone: '900 / 1950',
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
				desktop: '16 / 9',
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				'tp-w': '768',
				'tp-h': '1024',
				'mp-w': '900',
				'mp-h': '1950',
			},
			typography: {
				DEFAULT: {
					css: {
						ul: {
							paddingLeft: '0.9em',
						},
					},
				},
				print: {
					css: {
						fontSize: '12pt',
						lineHeight: 1.5,
						// color: 'var(--tw-prose-body)',
						// a: {
						// 	color: 'var(--tw-prose-links)',
						// },
						h1: {
							fontSize: '30pt',
							marginTop: '0',
							marginBottom: '0',
							lineHeight: 1,
							// color: 'var(--tw-prose-headings)',
						},
						h2: {
							fontSize: '18pt',
							marginTop: '0',
							marginBottom: '0.25in',
							lineHeight: 1,
							// color: 'var(--tw-prose-headings)',
						},
						h3: {
							fontSize: '14pt',
							marginTop: '0',
							marginBottom: '0',
							lineHeight: 1,
							// color: 'var(--tw-prose-headings)',
							fontFamily: [
								'var(--font-poppins)',
								...defaultTheme.fontFamily.sans,
							].join(' '),
						},
						ul: {
							paddingLeft: '0.9em',
						},
					},
				},
			},
			margin: {
				pg: 'var(--page-gutter)',
				section: 'var(--section-spacing)',
				row: 'calc(var(--section-spacing) * 0.5)',
			},
			padding: {
				pg: 'var(--page-gutter)',
				section: 'var(--section-spacing)',
				row: 'calc(var(--section-spacing) * 0.5)',
				envt: 'env(safe-area-inset-top)',
				envb: 'env(safe-area-inset-bottom)',
				envl: 'env(safe-area-inset-left)',
				envr: 'env(safe-area-inset-right)',
			},
			gap: {
				pg: 'var(--page-gutter)',
				section: 'var(--section-spacing)',
				row: 'calc(var(--section-spacing) * 0.5)',
			},
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '0',
				sm: '0',
				lg: '0',
				xl: '0',
				'2xl': '0',
			},
			// default breakpoints but with 40px removed
			screens: {
				sm: 'var(--container-width)',
				md: 'var(--container-width)',
				lg: 'var(--container-width)',
				xl: 'var(--container-width)',
				'2xl': 'var(--container-width)',
			},
		},
		row: {
			display: 'flex',
			width: '100%',
		},
	},
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('tw-elements/dist/plugin.cjs'),
		require('daisyui'),
	],
	corePlugins: {
		aspectRatio: false,
	},
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
		themes: [
			{
				light: {
					// ...require('daisyui/src/theming/themes')['light'],
					...LIGHT_THEME,
				},
			},
			{
				dark: {
					// ...require('daisyui/src/theming/themes')['dark'],
					...DARK_THEME,
				},
			},
		],
	},
};
export default config;
