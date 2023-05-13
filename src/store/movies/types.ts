import {
	MovieInformation,
	MovieReadMoreId,
	MoviesNowPlaying,
	MoviesPopular,
	MoviesResultSearch,
	MoviesTopRated,
	MoviesUpComing,
} from './interfaces';

export interface Movies {
	loading: boolean;
	moviesPopular: MoviesPopular[];
	moviesUpComing: MoviesUpComing[];
	moviesTopRated: MoviesTopRated[];
	moviesNowPlaying: MoviesNowPlaying[];
	movieInformation: MovieInformation;
	moviesResultSearch: MoviesResultSearch[];
	movieReadMoreId: MovieReadMoreId;
	genders: [];
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
