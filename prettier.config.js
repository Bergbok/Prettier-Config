/** @type {import("prettier").Config} */

const config = {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: '*.yml',
			options: {
				tabWidth: 2
			}
		}
	]
};

export default config;
