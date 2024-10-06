import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
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
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];