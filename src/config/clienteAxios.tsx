import axios from 'axios';

const clienteAxios = axios.create({
   baseURL: 'https://api.themoviedb.org/3/movie',
   params: {
      api_key: 'a8ae91218b79e102e9b4c8b24de34021',
      language: 'es-ES',
   },
});

export default clienteAxios;
