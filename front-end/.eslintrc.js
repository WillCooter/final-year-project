module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/require-prop-types': 'error',
        'vue/attributes-order': 'error',
        // 'vue/order-in-components': 'error',
        'vue/no-confusing-v-for-v-if': 1,

        semi: ['error', 'never'],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'no-var': 2,
        'object-shorthand': 1,
        'no-array-constructor': 1,
        'prefer-destructuring': ['error', { object: true, array: false }],
        quotes: ['error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],
        'template-curly-spacing': ['error', 'never'],
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'prefer-rest-params': 1,
        'space-before-blocks': 1,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'prefer-spread': 1,
        'prefer-arrow-callback': [1, {}],
        'arrow-spacing': ['error', { before: true, after: true }],
        'arrow-parens': ['error', 'as-needed'],
        'no-duplicate-imports': 1,
        'dot-notation': 1,
        'one-var': ['error', 'never'],
        'no-multi-assign': 1,
        eqeqeq: 1,
        'nonblock-statement-body-position': ['error', 'below'],
        'spaced-comment': 1,
        'space-infix-ops': 1,
        'eol-last': 0,
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        'padded-blocks': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'never',
                functions: 'never',
            },
        ],
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'no-empty-pattern': 0,
        'no-useless-escape': 0,
        'no-constant-condition': 0,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
