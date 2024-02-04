module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'google',
        'plugin:react/recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'comma-dangle': 'off',
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
    }
}
