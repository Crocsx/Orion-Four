module.exports = {
  root: true,
  ignorePatterns: ['!/src'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte', '*.ts'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
            custom: {
              regex: 'send|start|find',
              match: false,
            },
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            custom: {
              regex: 'send|start|find',
              match: false,
            },
          },
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: '{svelte,svelte/**/*,svelte-*,svelte-*/**/*}',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: '{$env/**,$app/**}',
                group: 'builtin',
                position: 'after',
              },
              {
                pattern: '$lib/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '{~anyx/app**,~anyx/app**/**}',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['svelte', 'svelte/**/*', 'svelte-*', 'svelte-*/**/*'],
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
