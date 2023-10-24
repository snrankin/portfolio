const postcssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: [
		'tailwindcss',
		'postcss-viewport-height-correction',
		'postcss-fixes',
		'postcss-momentum-scrolling',
		'postcss-easings',
		'postcss-easing-gradients',
		'postcss-combine-duplicated-selectors',
		[
			'postcss-sort-media-queries',
			{
				configuration: {
					unitlessMqAlwaysFirst: true,
				},
			},
		],
	],
};
