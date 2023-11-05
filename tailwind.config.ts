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
		screens: {
			sm: '576px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1376px',
			// => @media (min-width: 1388px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			primary: colors.teal,
			'primary-content': '#132522',
			secondary: colors.pink,
			'secondary-content': '#301822',
			accent: colors.purple,
			neutral: colors.gray,
			info: colors.cyan,
			success: colors.lime,
			warning: colors.amber,
			error: colors.red,
			gray: colors.gray,
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
				gray: colors.gray,
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
				sm: '90vw',
				md: '90vw',
				lg: '85vw',
				xl: '1170px',
				'2xl': '1170px',
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
		logs: true,
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
					secondary: colors.pink[500],
					accent: colors.purple[500],
					neutral: colors.gray[900],
					'base-100': colors.gray[50],
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
					'base-100': colors.gray[800],
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
