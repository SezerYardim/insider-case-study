import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {},
    plugins: {
        eslintConfigPrettier,
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {  
        parser: tseslint.parser,
        project: ['./tsconfig.json', './tsconfig.node.json'],
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  eslintConfigPrettier,
];
