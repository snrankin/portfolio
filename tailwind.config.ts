import { get, isEmpty, reverse, set, zip, zipObject } from 'lodash';
import type { Config } from 'tailwindcss';
import { default as colors } from 'tailwindcss/colors';
import fontColorContrast from 'font-color-contrast';
const { contrastColor } = require('contrast-color');
const defaultTheme = require('tailwindcss/defaultTheme');
const shadesOf = require('tailwind-shades');
const daisyBaseColor = (name = '', dark = false) => {
	let colorObj = get(colors, name);

	let baseColors = {};

	let baseValues: string[] = [];
	let levelNames: string[] = [];

	if (colorObj != undefined) {
		let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

		levels.forEach((level, i) => {
			let color = get(colorObj, level, '');
			if (!isEmpty(color)) {
				baseValues.push(color);
				levelNames.push(`base-${level}`);
			}
		});

		if (dark) {
			reverse(baseValues);
		}

		baseColors = zipObject(levelNames, baseValues);
	}

	return baseColors;
};

const BLUE = {
	DEFAULT: '#255cc0',
	'50': '#DAE3F4',
	'100': '#B6C8EA',
	'200': '#92ADDF',
	'300': '#6D92D5',
	'400': '#4977CA',
	'500': '#255cc0',
	'600': '#1E4C9F',
	'700': '#183D7F',
	'800': '#122E60',
	'900': '#0C1E3F',
	'950': '#060F1F',
};
const YELLOW = {
	DEFAULT: '#FFAF1C',
	'50': '#FFF1D9',
	'100': '#FFE4B3',
	'200': '#FFD78D',
	'300': '#FFC967',
	'400': '#FFBC41',
	'500': '#FFAF1C',
	'600': '#D49117',
	'700': '#A97412',
	'800': '#7F570E',
	'900': '#543A09',
	'950': '#2A1D04',
};
const ORANGE = {
	DEFAULT: '#FF7C1C',
	'50': '#FFE9D9',
	'100': '#FFD3B3',
	'200': '#FFBD8D',
	'300': '#FFA767',
	'400': '#FF9141',
	'500': '#FF7C1C',
	'600': '#D46717',
	'700': '#A95212',
	'800': '#7F3E0E',
	'900': '#542909',
	'950': '#2A1404',
};
const GREEN = {
	DEFAULT: '#0CCE6B',
	'50': '#D6F6E6',
	'100': '#AEEECD',
	'200': '#85E6B5',
	'300': '#5DDE9C',
	'400': '#34D683',
	'500': '#0CCE6B',
	'600': '#09AB59',
	'700': '#078947',
	'800': '#066735',
	'900': '#034423',
	'950': '#012211',
};
const TEAL = {
	'50': '#D7F3F0',
	'100': '#B0E7E1',
	'200': '#89DBD2',
	'300': '#62CFC3',
	'400': '#3BC3B4',
	'500': '#14b8a6',
	'600': '#10998A',
	'700': '#0D7A6E',
	'800': '#0A5C53',
	'900': '#063D37',
	'950': '#031E1B',
};

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx,svg}',
		'./node_modules/tw-elements-react/dist/js/**/*.js',
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
				primary: TEAL,
				secondary: ORANGE,
				accent: BLUE,
				tertiary: YELLOW,
				info: BLUE,
				success: GREEN,
				warning: YELLOW,
				error: colors.red,
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
				DEFAULT: ` 0px 0.3px 0.3px hsl(var(--shadow-color) / 0.3), 0px 1px 1.2px -0.6px hsl(var(--shadow-color) / 0.31), 0px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.33), -0.1px 3.8px 4.4px -1.7px hsl(var(--shadow-color) / 0.34), -0.2px 7.3px 8.5px -2.2px hsl(var(--shadow-color) / 0.35)`,
				sm: `0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36), 0px 0.9px 1px -1.1px hsl(var(--shadow-color) / 0.38), 0px 2.1px 2.4px -2.2px hsl(var(--shadow-color) / 0.41)`,

				lg: `0px 0.2px 0.2px hsl(var(--shadow-color) / 0.28), 0px 1px 1.2px -0.2px hsl(var(--shadow-color) / 0.28), -0.1px 1.7px 2px -0.5px hsl(var(--shadow-color) / 0.29), -0.1px 2.6px 3px -0.7px hsl(var(--shadow-color) / 0.3), -0.2px 3.7px 4.3px -1px hsl(var(--shadow-color) / 0.3), -0.2px 5.3px 6.2px -1.2px hsl(var(--shadow-color) / 0.31), -0.3px 7.5px 8.7px -1.5px hsl(var(--shadow-color) / 0.32), -0.5px 10.4px 12.1px -1.7px hsl(var(--shadow-color) / 0.32), -0.6px 14.2px 16.5px -2px hsl(var(--shadow-color) / 0.33), -0.8px 19px 22.1px -2.2px hsl(var(--shadow-color) / 0.33)`,
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
						a: {
							color: colors.teal[600],
							'&:hover': {
								color: colors.pink[600],
							},
						},
						h1: {
							fontSize: '30pt',
							marginTop: '0',
							marginBottom: '0',
							lineHeight: 1,
						},
						h2: {
							fontSize: '18pt',
							marginTop: '0',
							marginBottom: '0.25in',
							lineHeight: 1,
							color: colors.slate[950],
						},
						h3: {
							fontSize: '14pt',
							marginTop: '0',
							marginBottom: '0',
							lineHeight: 1,
							color: colors.slate[700],
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
					...require('daisyui/src/theming/themes')['light'],
					primary: TEAL[500],
					secondary: ORANGE[500],
					accent: BLUE[500],
					neutral: colors.slate[800],
					'base-100': colors.slate[100],
					'base-200': colors.slate[200],
					'base-300': colors.slate[300],
					'base-content': colors.slate[800],
					info: BLUE[500],
					success: GREEN[500],
					warning: YELLOW[500],
					error: colors.red[500],
				},
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: TEAL[600],
					secondary: ORANGE[600],
					accent: BLUE[600],
					neutral: colors.slate[100],
					'base-100': colors.slate[700],
					'base-200': colors.slate[800],
					'base-300': colors.slate[900],
					'base-content': colors.slate[100],
					info: BLUE[600],
					success: GREEN[600],
					warning: YELLOW[600],
					error: colors.red[600],
				},
			},
		],
	},
};
export default config;
