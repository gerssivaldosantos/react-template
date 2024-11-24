import { version } from '../../package.json';

export default {
	storage: {
		auth: '@andows.auth',
		theme: '@andows.theme'
	},
	version: version ?? '0.1.0',
	backend: {
		url: import.meta.env.BASE_URL ?? '',
		key: import.meta.env.API_KEY ?? '',
		secret: import.meta.env.API_SECRET
	}
} as const;
