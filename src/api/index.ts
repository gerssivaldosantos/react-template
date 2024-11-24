import axios from 'axios';
import env from 'config/env';

const api = axios.create({
	baseURL: env.backend.url,
	headers: {
		'x-api-key': env.backend.key
	}
});

export default api;
