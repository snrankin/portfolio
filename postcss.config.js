import litePreset from 'cssnano-preset-lite';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

module.exports = (api) => {
	const preset = process.env.NODE_ENV === 'production' ? litePreset({ discardComments: false }) : litePreset({ discardComments: false });
	/** @type {import('postcss-load-config').Config} */
	const config = {
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
			postcssPresetEnv({
				/* pluginOptions */
				features: {
					'nesting-rules': {
						noIsPseudoSelector: false,
					},
				},
			}),
		],
	};
	return config;
};
