import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files: ['**/*.js', '*.js'],
    rules: {
      'no-unused-vars': [
        'warn',  
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_'
        }
      ],
      'no-undef': 'warn',
      indent: ['error', 2],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    }
  },
];