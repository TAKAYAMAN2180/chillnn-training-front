module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: [],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    // add your custom rules here
    rules: {}
}
