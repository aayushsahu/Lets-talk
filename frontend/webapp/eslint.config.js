import globals from 'globals';
// import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
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
      'linebreak-style': ['warn', 'windows'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    }
  },

  pluginReact.configs.flat.recommended
];
