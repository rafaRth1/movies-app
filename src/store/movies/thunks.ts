import axios, { CancelTokenSource } from 'axios';
import { Appthunk } from '../store';
import clienteAxios from '../../config/clienteAxios';
import {
	getAllCategories,
	getGenders,
	getMovieInformation,
	getMovieSearch,
	getMoviesGenreType,
	getMoviesNowPlaying,
	getMoviesPopular,
	getMoviesRecommend,
	getMoviesTopRated,
	getMoviesUpcoming,
	getResultSearch,
	getVideosMovie,
	loadingFinish,
	loadingStart,
	showMoviesError,
} from './movieSlice';

export const startMoviesNewShow = (cancelToken: CancelTokenSource): Appthunk => {
	return async (dispatch) => {
		try {
			const config = {
				cancelToken: cancelToken.token,
			};

			const moviePopular = await clienteAxios.get('/movie/popular', config);
			const moviesUpcoming = await clienteAxios.get('/movie/upcoming', config);
			const movieTop = await clienteAxios.get('/movie/top_rated', config);

			await Promise.allSettled([moviePopular, moviesUpcoming, movieTop]).then((responses: any) => {
				dispatch(getMoviesPopular(responses[0].value.data.results));
				dispatch(getMoviesUpcoming(responses[1].value.data.results));
				dispatch(getMoviesTopRated(responses[2].value.data.results));
			});
		} catch (error: any) {
			const ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';

			if (error.code === ERR_BAD_REQUEST) {
				dispatch(showMoviesError());
			}
		}
	};
};

export const fetchMoviesTopRated = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const movieTopRated = await clienteAxios.get('/movie/top_rated');
			dispatch(getMoviesTopRated(movieTopRated.data.results));
			dispatch(loadingFinish());
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchGenres = (): Appthunk => {
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
			const key = import.meta.env.VITE_KEY_API_MOVIE;
			const moviesSearchResult = await axios.get(
				`${import.meta.env.VITE_MOVIE_URL}/search/movie?query=${movie}&api_key=${key}`
			);
			dispatch(getResultSearch(moviesSearchResult.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchSearchMovieId = (id?: string): Appthunk => {
	return async (dispatch) => {
		try {
			const movieReadMoreId = await clienteAxios(`/movie/${id}`);
			dispatch(getMovieSearch(movieReadMoreId.data));
		} catch (error) {
			dispatch(showMoviesError());
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
			dispatch(showMoviesError());
		}
	};
};

export const fetchMovieVideo = (id?: string): Appthunk => {
	return async (dispatch) => {
		try {
			const responseMovieVideo = await clienteAxios(`/movie/${id}/videos`);
			dispatch(getVideosMovie(responseMovieVideo.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchMoviesGenreType = (id?: string): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const genreMoviesType = await clienteAxios(`/discover/movie?with_genres=${id}`);
			dispatch(getMoviesGenreType(genreMoviesType.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchAllCategories = (): Appthunk => {
	return async (dispatch) => {
		dispatch(loadingStart());

		try {
			const arrayAllCategories = await clienteAxios(`/watch/providers/movie?watch_region=PE`);
			dispatch(getAllCategories(arrayAllCategories.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};

export const fetchRecomendMovies = (id?: string): Appthunk => {
	return async (dispatch) => {
		try {
			const response = await clienteAxios(`/movie/${id}/recommendations`);
			dispatch(getMoviesRecommend(response.data.results));
		} catch (error) {
			dispatch(showMoviesError());
		}
	};
};
