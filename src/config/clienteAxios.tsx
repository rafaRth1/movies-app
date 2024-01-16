import axios from 'axios';

const clienteAxios = axios.create({
	baseURL: import.meta.env.VITE_MOVIE_URL,
	params: {
		api_key: import.meta.env.VITE_KEY_API_MOVIE,
		language: 'es-ES',
		limit: '5',
	},
});

export default clienteAxios;
