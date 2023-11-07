import type { Config } from 'tailwindcss';
import { default as colors } from 'tailwindcss/colors';
const defaultTheme = require('tailwindcss/defaultTheme');

const round = (num: number) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/tw-elements-react/dist/js/**/*.js',
	],

	theme: {
		fontFamily: {
			sans: ['__Poppins_7afa0e', ...defaultTheme.fontFamily.sans],
			system: [...defaultTheme.fontFamily.sans],
			mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
		},
		fontSize: {
			sm: ['0.8rem', '1.5'],
			base: ['1rem', '1.5'],
			xl: ['clamp(1.125rem, 1.0871rem + 0.1894vw, 1.25rem)', '1.3'],
			'2xl': ['clamp(1.266rem, 1.176rem + 0.45vw, 1.563rem)', '1.3'],
			'3xl': ['clamp(1.424rem, 1.2637rem + 0.8015vw, 1.953rem)', '1.3'],
			'4xl': ['clamp(1.602rem, 1.3478rem + 1.2712vw, 2.441rem)', '1.2'],
			'5xl': ['clamp(1.802rem, 1.4232rem + 1.8939vw, 3.052rem)', '1.1'],
			'6xl': ['clamp(2.027rem, 1.4852rem + 2.7091vw, 3.815rem)', '1.1'],
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
				primary: colors.teal,
				secondary: colors.pink,
				accent: colors.purple,
				neutral: colors.gray,
				info: colors.cyan,
				success: colors.lime,
				warning: colors.amber,
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
				print: {
					css: {
						color: '#000',
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
							marginBottom: '0.75em',
							lineHeight: 1,
						},
					},
				},
			},
			margin: {
				pg: 'var(--page-gutter)',
			},
			padding: {
				pg: 'var(--page-gutter)',
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
		require('tw-elements/dist/plugin.cjs'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
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
					...require('daisyui/src/theming/themes')[
						'[data-theme=light]'
					],
					primary: colors.teal[500],
					'primary-content': '#132522',
					secondary: colors.pink[500],
					'secondary-content': '#301822',
					accent: colors.purple[500],
					neutral: colors.gray[800],
					'base-100': colors.gray[100],
					'base-200': colors.gray[200],
					'base-300': colors.gray[300],
					info: colors.cyan[500],
					success: colors.lime[500],
					warning: colors.amber[500],
					error: colors.red[500],
				},
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')[
						'[data-theme=dark]'
					],
					primary: colors.teal[500],
					secondary: colors.pink[500],
					accent: colors.purple[500],
					neutral: colors.gray[100],
					'base-100': colors.gray[700],
					'base-200': colors.gray[800],
					'base-300': colors.gray[900],
					info: colors.cyan[500],
					success: colors.lime[500],
					warning: colors.amber[500],
					error: colors.red[500],
				},
			},
		],
	},
};
export default config;
