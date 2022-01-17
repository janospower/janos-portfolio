/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	kit: {
		target: 'body',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
