const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		'postcss-viewport-height-correction': {},
		'postcss-fixes': {},
		'postcss-each': {},
		'postcss-momentum-scrolling': {},
		'postcss-easings': {},
		'postcss-easing-gradients': {},
		'postcss-inline-svg': {
			paths: [path.join(process.cwd(), 'src', 'img')],
		},
		autoprefixer: {},
		// 'postcss-combine-duplicated-selectors': {},
		// 'postcss-sort-media-queries': {
		// 	configuration: {
		// 		unitlessMqAlwaysFirst: true,
		// 	},
		// },
	},
};
