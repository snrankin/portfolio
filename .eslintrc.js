module.exports = {
	extends: ['next', 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:import/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	rules: {
		'import/no-unresolved': 0,
		'import/no-anonymous-default-export': 0,
		'no-unsafe-optional-chaining': 0,
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
			},
		],
		'no-console': 1,
		'no-unused-vars': 1,
		'no-useless-escape': 0,
		quotes: ['warn', 'single'],
		'react/prop-types': 1,
	},
	parserOptions: {
		ecmaFeatures: {
			globalReturn: true,
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 2017,
		requireConfigFile: false,
		allowImportExportEverywhere: true,
	},
	env: {
		es6: true,
	},
	ignorePatterns: ['schema.generated.*'],
	plugins: ['@typescript-eslint', 'react'],
};
