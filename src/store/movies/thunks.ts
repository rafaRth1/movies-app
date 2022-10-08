import axios from 'axios';
import { Appthunk } from '../store';
import clienteAxios from '../../config/clienteAxios';
import { MoviePopular } from '../../interfaces/movieInterfaces';
import {
	getGenders,
	getMovieReadMore,
	getMoviesNowPlaying,
	getMoviesPopular,
	getMoviesTopRated,
	getMoviesUpcoming,
	getResultSearch,
	loadingStart,
	showMoviesError,
} from './movieSlice';

export const startMoviesNewShow = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());
		try {
			const moviePopular = await clienteAxios.get<MoviePopular>('/popular');
			const moviesUpcoming = await clienteAxios.get('/upcoming');
			const movieTop = await clienteAxios.get('/top_rated');

			Promise.all([moviePopular, moviesUpcoming, movieTop]).then((responses) => {
				dispatch(getMoviesPopular(responses[0].data.results));
				dispatch(getMoviesUpcoming(responses[1].data.results));
				dispatch(getMoviesTopRated(responses[2].data.results));
			});
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchMoviesTopRated = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const movieTopRated = await clienteAxios.get('/top_rated');
			dispatch(getMoviesTopRated(movieTopRated.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchGender = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		const KEY = 'a8ae91218b79e102e9b4c8b24de34021';

		try {
			const gender = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`);
			dispatch(getGenders(gender.data.genres));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchNowPlaying = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());
		try {
			const moviesNowPlaying = await clienteAxios.get(`/now_playing?page=2`);
			dispatch(getMoviesNowPlaying(moviesNowPlaying.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchResultSearch = (movie: string | undefined): Appthunk => {
	return async (dispatch) => {
		const KEY = 'a8ae91218b79e102e9b4c8b24de34021';
		dispatch(loadingStart());

		try {
			const moviesSearchResult = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${movie}`
			);
			dispatch(getResultSearch(moviesSearchResult.data.results));
		} catch (error) {
			dispatch(showMoviesError);
		}
	};
};

export const fetchSearchMovieId = (id: string | undefined): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const movieReadMoreId = await clienteAxios(`/${id}`);
			dispatch(getMovieReadMore(movieReadMoreId.data));
		} catch (error) {
			dispatch(showMoviesError);
		}
	};
};
