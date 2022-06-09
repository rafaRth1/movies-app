import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import clienteAxios from '../config/clienteAxios';
import { Appthunk } from './store';
import { Movies } from './types';
import { MoviePopular } from '../interfaces/movieInterfaces';

const initialState: Movies = {
   loading: false,
   moviesPopular: [],
   moviesUpComing: [],
   moviesTopRated: [], // Movies Reviews
   moviesNowPlaying: [],
   genders: [],
   error: false,
   modal: false,
   showNavigation: false,
   contentModal: {
      id: 0,
      img: '',
      title: '',
      overview: '',
      date: '',
   },
};

const slice = createSlice({
   name: 'movieReducer',
   initialState,
   reducers: {
      loadingStart(state: Movies) {
         return {
            ...state,
            loading: true,
         };
      },

      loadingFinish(state: Movies) {
         return {
            ...state,
            loading: false,
         };
      },

      showMoviesStart(state: Movies) {
         return {
            ...state,
            loading: true,
            moviesPopular: [],
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
   },
});

export const fetchMovies = (): Appthunk => {
   return async (dispatch) => {
      dispatch(showMoviesStart());
      try {
         const movies = await clienteAxios.get<MoviePopular>('/popular');
         dispatch(getMoviesPopular(movies.data.results));
      } catch (error) {
         dispatch(showMoviesError());
      }
   };
};

export const fetchMoviesUpcoming = (): Appthunk => {
   return async (dispatch) => {
      try {
         const movies = await clienteAxios.get('/upcoming');
         dispatch(getMoviesUpcoming(movies.data.results));
      } catch (error) {
         dispatch(showMoviesError());
      }
   };
};

export const fetchTopRated = (): Appthunk => {
   return async (dispatch) => {
      try {
         const movieTop = await clienteAxios.get('/top_rated');
         dispatch(getMoviesTopRated(movieTop.data.results));
      } catch (error) {
         dispatch(showMoviesError());
      }
   };
};

export const fetchGender = (): Appthunk => {
   return async (dispatch) => {
      const KEY = 'a8ae91218b79e102e9b4c8b24de34021';

      try {
         const gender = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`
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
         const moviesNowPlaying = await clienteAxios.get(`/now_playing?page=2`);
         dispatch(getMoviesNowPlaying(moviesNowPlaying.data.results));
      } catch (error) {
         dispatch(showMoviesError());
      }
   };
};

export const {
   loadingStart,
   loadingFinish,
   showMoviesStart,
   showMoviesError,
   showModal,
   getContentModal,
   getMoviesPopular,
   getMoviesUpcoming,
   getMoviesTopRated,
   getGenders,
   getMoviesNowPlaying,
} = slice.actions;
export default slice.reducer;
