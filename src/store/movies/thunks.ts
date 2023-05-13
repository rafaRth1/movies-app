import axios from 'axios';
import { Appthunk } from '../store';
import clienteAxios from '../../config/clienteAxios';
import {
	getGenders,
	getMovieInformation,
	getMovieSearch,
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
			const moviePopular = await clienteAxios.get('/movie/popular');
			const moviesUpcoming = await clienteAxios.get('/movie/upcoming');
			const movieTop = await clienteAxios.get('/movie/top_rated');

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
			const movieTopRated = await clienteAxios.get('/movie/top_rated');
			dispatch(getMoviesTopRated(movieTopRated.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchGender = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const gender = await axios.get(
				`${import.meta.env.VITE_MOVIE_URL}/genre/movie/list?api_key=${
					import.meta.env.VITE_KEY_API_MOVIE
				}&language=en-US`
			);
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
			const moviesNowPlaying = await clienteAxios.get(`/movie/now_playing?page=2`);
			dispatch(getMoviesNowPlaying(moviesNowPlaying.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchResultSearch = (movie?: string): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const moviesSearchResult = await axios.get(
				`${import.meta.env.VITE_MOVIE_URL}/search/movie?api_key=${
					import.meta.env.VITE_KEY_API_MOVIE
				}&query=${movie}`
			);
			dispatch(getResultSearch(moviesSearchResult.data.results));
		} catch (error) {
			dispatch(showMoviesError);
		}
	};
};

export const fetchSearchMovieId = (id?: string): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const movieReadMoreId = await clienteAxios(`/movie/${id}`);
			dispatch(getMovieSearch(movieReadMoreId.data));
		} catch (error) {
			dispatch(showMoviesError);
		}
	};
};

export const fetchMovieInformation = (id?: string): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const movieInformationId = await clienteAxios(`/movie/${id}`);
			dispatch(getMovieInformation(movieInformationId.data));
		} catch (error) {
			dispatch(showMoviesError);
		}
	};
};
