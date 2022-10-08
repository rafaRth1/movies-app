import axios from 'axios';

const movieAppApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export default movieAppApi;
