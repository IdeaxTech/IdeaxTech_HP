import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
	{
		ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	tseslint.configs.recommended,
	{
		...pluginReact.configs.flat.recommended,
		files: ['**/*.{jsx,tsx}'],
	},
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			'astro/no-set-html-directive': 'error',
		},
	},
]);
