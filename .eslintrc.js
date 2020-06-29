module.exports = {
	// extends: ['@finance/loan/react-typescript'],
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'react-app',
		'plugin:prettier/recommended',
		"plugin:jsx-a11y/recommended"
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', "jsx-a11y"],
};