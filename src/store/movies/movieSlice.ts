import { createSlice } from '@reduxjs/toolkit';
import { initialState, Movies } from './';

export const movieSlice = createSlice({
	name: 'movieReducer',
	initialState,
	reducers: {
		loadingStart(state: Movies) {
			return {
				...state,
				loading: true,
			};
		},

		showMoviesError(state: Movies) {
			return {
				...state,
				loading: true,
				error: true,
			};
		},

		showModal(state: Movies, action: any) {
			return {
				...state,
				modal: action.payload,
			};
		},

		switchTheme(state: Movies, action: any) {
			return {
				...state,
				themeDark: action.payload,
			};
		},

		showModalSearch(state: Movies, action: any) {
			return {
				...state,
				modalSearch: action.payload,
			};
		},

		activeNavigationMobileMobile(state: Movies, action: any) {
			return {
				...state,
				activeNavigationMobile: action.payload,
			};
		},

		getContentModal(state: Movies, action: any) {
			return {
				...state,
				contentModal: action.payload,
			};
		},

		// Nombre de la action
		getMoviesPopular(state: Movies, action: any) {
			// Funcion del reducer
			return {
				...state,
				loading: false,
				moviesPopular: action.payload,
			};
		},

		getMoviesUpcoming(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				moviesUpComing: action.payload,
			};
		},

		getMoviesTopRated(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				moviesTopRated: action.payload,
			};
		},

		getGenders(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				genders: action.payload,
			};
		},

		getMoviesNowPlaying(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				moviesNowPlaying: action.payload,
			};
		},

		getResultSearch(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				resultMoviesSearch: action.payload,
			};
		},

		getMovieReadMore(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				movieReadMoreId: action.payload,
			};
		},

		getMovieInformationId(state: Movies, action: any) {
			return {
				...state,
				loading: false,
				movieInformationId: action.payload,
			};
		},

		saveValueSearch(state: Movies, action: any) {
			return {
				...state,
				valueSearch: action.payload,
			};
		},
	},
});

export const {
	loadingStart,
	showMoviesError,
	showModal,
	switchTheme,
	showModalSearch,
	activeNavigationMobileMobile,
	getContentModal,
	getMoviesPopular,
	getMoviesUpcoming,
	getMoviesTopRated,
	getGenders,
	getMoviesNowPlaying,
	getResultSearch,
	getMovieReadMore,
	getMovieInformationId,
	saveValueSearch,
} = movieSlice.actions;
