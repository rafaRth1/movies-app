import { MovieInformation, MovieReadMoreId } from './interfaces';
import { ContentModal, Movies } from './types';

export const initialState: Movies = {
	moviesPopular: [],
	moviesUpComing: [],
	moviesTopRated: [],
	moviesNowPlaying: [],
	moviesResultSearch: [],
	genres: [],
	moviesGenreType: [],
	arrayAllCategories: [],
	arrayMovieVideos: [],
	arrayMoviesRecommend: [],
	movieInformation: {} as MovieInformation,
	movieReadMoreId: {} as MovieReadMoreId,
	contentModal: {} as ContentModal,
	error: false,
	modal: false,
	modalSearch: false,
	activeNavigation: false,
	themeDark: true,
	loading: false,
	valueSearch: '',
};
