const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
const CSS_DIST = path.join('.next', 'static', 'css');
//samrankin.dev/_next/static/css/ac39a273652a77f3.css
module.exports = {
	plugins: {
		'postcss-import': {
			path: [
				path.join(process.cwd(), 'src', 'img'),
				path.join(process.cwd(), 'node_modules', 'devicon'),
				path.join(process.cwd(), 'node_modules', 'devicon', 'fonts'),
			],
		},
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
		'postcss-combine-duplicated-selectors': {},
		'postcss-sort-media-queries': {
			configuration: {
				unitlessMqAlwaysFirst: true,
			},
		},
	},
};
