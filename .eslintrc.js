module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module",
		"allowImportExportEverywhere": true,
		"babelOptions": {
			"configFile": ".babelrc.js",
		}
	},
	"plugins": [
		"react",
		"react-hooks",
		"jsx-a11y",
		"import"
	],
	"rules": {
		"indent": [
			"warn",
			4
		],
		"linebreak-style": [
			"warn",
			"unix"
		],
		"quotes": [
			"warn",
			"double"
		],
		"semi": [
			"warn",
			"always"
		],
		"no-mixed-spaces-and-tabs": [
			"warn",
			"smart-tabs"
		],
		"no-unused-vars": [
			"warn",
			{
				"args": "all"
			}
		],
		"react-hooks/rules-of-hooks": "warn",
		"react-hooks/exhaustive-deps": "warn"
	},
	"settings": {
		"react": {
			"version": "^16.12.0"
		},
		"import/extensions": [
			".js",
			".jsx"
		]
	}
};
