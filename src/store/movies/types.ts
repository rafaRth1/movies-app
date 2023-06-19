import {
	InterfaceAllCategory,
	InterfaceVideoMovie,
	MovieInformation,
	MovieReadMoreId,
	MoviesGenreType,
	MoviesNowPlaying,
	MoviesPopular,
	MoviesResultSearch,
	MoviesTopRated,
	MoviesUpComing,
} from './interfaces';
import { RecommendMovie } from './interfaces/RecommendMovie';

export interface Movies {
	loading: boolean;
	moviesPopular: MoviesPopular[];
	moviesUpComing: MoviesUpComing[];
	moviesTopRated: MoviesTopRated[];
	moviesNowPlaying: MoviesNowPlaying[];
	movieInformation: MovieInformation;
	moviesResultSearch: MoviesResultSearch[];
	moviesGenreType: MoviesGenreType[];
	arrayAllCategories: InterfaceAllCategory[];
	arrayMovieVideos: InterfaceVideoMovie[];
	arrayMoviesRecommend: RecommendMovie[];
	movieReadMoreId: MovieReadMoreId;
	genres: [];
	error: boolean;
	modal: boolean;
	modalSearch: boolean;
	contentModal: ContentModal;
	activeNavigation: boolean;
	valueSearch: string;
	themeDark: boolean;
}

export interface ContentModal {
	id: number;
	img: string;
	title: string;
	overview: string;
	date: string;
}
