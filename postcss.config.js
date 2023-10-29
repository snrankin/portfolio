const postcssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		'postcss-viewport-height-correction': {},
		'postcss-fixes': {},
		'postcss-momentum-scrolling': {},
		'postcss-easings': {},
		'postcss-easing-gradients': {},
		autoprefixer: {},
		'postcss-combine-duplicated-selectors': {},
		'postcss-sort-media-queries': {
			configuration: {
				unitlessMqAlwaysFirst: true,
			},
		},
	},
};
