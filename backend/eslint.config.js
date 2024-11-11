import globals from 'globals';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    files: ['**/*.js', '*.js'],
    ignores: ['dist/**', 'dist/*'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-undef': 'warn',
      indent: ['warn', 2],
      'linebreak-style': ['error', 'windows'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always']
    }
  }
];
