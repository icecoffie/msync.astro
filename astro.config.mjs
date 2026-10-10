// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://msync.web.id',
	i18n: {
		defaultLocale: 'id',
		locales: ['id', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [sitemap({
		serialize(item) {
			return { ...item, priority: 1.0 };
		},
	})],
	vite: {
		plugins: [tailwindcss()],
	},
});
