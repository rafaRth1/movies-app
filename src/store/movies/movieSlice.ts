import { createSlice } from '@reduxjs/toolkit';
import { initialState, Movies } from './';

export const movieSlice = createSlice({
	name: 'movieReducer',
	initialState,
	reducers: {
		loadingStart: (state: Movies) => {
			state.loading = true;
		},

		loadingFinish: (state: Movies) => {
			state.loading = false;
		},

		showMoviesError: (state: Movies) => {
			state.loading = true;
			state.error = true;
		},

		showModal: (state: Movies, action: any) => {
			state.modal = action.payload;
		},

		switchTheme: (state: Movies, action: any) => {
			state.themeDark = action.payload;
		},

		showModalSearch: (state: Movies, action: any) => {
			state.modalSearch = action.payload;
		},

		handleActiveNavigation: (state: Movies, action: any) => {
			state.activeNavigation = action.payload;
		},

		getContentModal: (state: Movies, action: any) => {
			state.contentModal = action.payload;
		},

		getMoviesPopular: (state: Movies, action: any) => {
			state.moviesPopular = action.payload;
		},

		getMoviesUpcoming: (state: Movies, action: any) => {
			state.moviesUpComing = action.payload;
		},

		getMoviesTopRated: (state: Movies, action: any) => {
			state.moviesTopRated = action.payload;
		},

		getMoviesNowPlaying: (state: Movies, action: any) => {
			state.loading = false;
			state.moviesNowPlaying = action.payload;
		},

		getGenders: (state: Movies, action: any) => {
			state.loading = false;
			state.genres = action.payload;
		},

		getMoviesGenreType: (state: Movies, action: any) => {
			state.loading = false;
			state.moviesGenreType = action.payload;
		},

		getResultSearch: (state: Movies, action: any) => {
			state.loading = false;
			state.moviesResultSearch = action.payload;
		},

		getMovieSearch: (state: Movies, action: any) => {
			state.loading = false;
			state.movieReadMoreId = action.payload;
		},

		getMovieInformation: (state: Movies, action: any) => {
			state.loading = false;
			state.movieInformation = action.payload;
		},

		getAllCategories: (state: Movies, action: any) => {
			state.loading = false;
			state.arrayAllCategories = action.payload;
		},

		saveValueSearch: (state: Movies, action: any) => {
			state.valueSearch = action.payload;
		},
	},
});

export const {
	loadingStart,
	loadingFinish,
	showMoviesError,
	showModal,
	switchTheme,
	showModalSearch,
	handleActiveNavigation,
	getContentModal,
	getMoviesPopular,
	getMoviesUpcoming,
	getMoviesTopRated,
	getMovieInformation,
	getGenders,
	getMoviesNowPlaying,
	getResultSearch,
	getMovieSearch,
	saveValueSearch,
	getMoviesGenreType,
	getAllCategories,
} = movieSlice.actions;
