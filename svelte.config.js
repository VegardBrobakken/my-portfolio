import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Other kit configurations
		adapter: adapter({
			// If you're deploying to GitHub Pages, make sure to specify the base path
			pages: 'build',  // Directory where the build files are stored
			assets: 'build', // Same as above
			fallback: "index.html"
		  }),
		paths: {
			base: '/my-portfolio', // Replace with your repo name
		  }
	}
};

export default config;
