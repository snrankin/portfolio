import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/tw-elements-react/dist/js/**/*.js'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],

				mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				icon: [
					'0.8em',
					{
						lineHeight: '1',
					},
				],
			},
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.2rem',
				lg: '1.5rem',
				xl: '1.5rem',
				'2xl': '1.5rem',
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
	darkMode: 'class',
	plugins: [require('tw-elements/dist/plugin.cjs'), require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
		// themes: [

		// 	{
		// 		light: {
		// 			...require('daisyui/src/theming/themes')['[data-theme=light]'],
		// 			primary: '#0D9488',
		// 			secondary: '#DB2777',
		// 			accent: '#7C3AED',
		// 			neutral: '#18181B',
		// 			'base-100': '#FAFAFA',
		// 			info: '#0891B2',
		// 			success: '#65A30D',
		// 			warning: '#F59E0B',
		// 			error: '#E11D48',
		// 		},
		// 	},
		// 	{
		// 		dark: {
		// 			...require('daisyui/src/theming/themes')['[data-theme=dark]'],
		// 			primary: '#2DD4BF',
		// 			secondary: '#F472B6',
		// 			accent: '#A855F7',
		// 			neutral: '#FAFAFA',
		// 			'base-100': '#18181B',
		// 			info: '#67E8F9',
		// 			success: '#BEF264',
		// 			warning: '#FCD34D',
		// 			error: '#FDA4AF',
		// 		},
		// 	},
		// ],
	},
};
export default config;
