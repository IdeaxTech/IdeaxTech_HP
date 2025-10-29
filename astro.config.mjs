// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
	site: 'https://ideaxtech.github.io',
	base: '/IdeaxTech_HP',
	markdown: {
		remarkPlugins: [remarkBreaks],
	},
});
