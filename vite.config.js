import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['devalue']
	}
};

export default config;
