module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		// 'indent': [ 'error', 'tab' ],
    'no-unused-vars': 'off',
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ]
	}
};