module.exports = {
	root: true,
	extends: [
		'eslint:recommended', // use recommended configs
		'plugin:react/recommended',
		'plugin:gatsby/recommended',
		'prettier',
	],
	plugins: ['react', 'gatsby'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		requireConfigFile: false,
		allowImportExportEverywhere: true,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},
	globals: {
		window: true,
		document: true,
	},
	rules: {
		'no-unused-vars': 1,
		'no-useless-escape': 0,
		quotes: ['warn', 'single'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'react/prop-types': 0,
	},
	settings: {
		react: {
			version: 'detect', // detect react version
		},
	},
	env: {
		node: true, // defines things like process.env when generating through node
	},
};
