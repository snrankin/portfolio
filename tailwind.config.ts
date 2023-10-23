import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/tw-elements-react/dist/js/**/*.js'],

	theme: {
		fontFamily: {
			sans: ['Poppins'],
			mono: ['Inconsolata'],
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('tw-elements/dist/plugin.cjs'),
		require('@tailwindcss/typography')({
			// all these options default to the values specified here
			ellipsis: true, // whether to generate ellipsis utilities
			hyphens: true, // whether to generate hyphenation utilities
			kerning: true, // whether to generate kerning utilities
			textUnset: true, // whether to generate utilities to unset text properties
			componentPrefix: '', // the prefix to use for text style classes
		}),
		require('daisyui'),
	],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
		themes: false,
	},
};
export default config;
