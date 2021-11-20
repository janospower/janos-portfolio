/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [
				autoprefixer
			]
		}
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
