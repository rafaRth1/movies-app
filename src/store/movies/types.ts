import { DataDetails } from '../../interfaces/dataDetails';

export interface Movies {
	loading: boolean;
	moviesPopular: [];
	moviesUpComing: [];
	moviesTopRated: [];
	moviesNowPlaying: [];
	movieReadMoreId: any;
	resultMoviesSearch: [];
	movieInformationId: DataDetails;
	genders: [];
	error: boolean;
	modal: boolean;
	modalSearch: boolean;
	contentModal: ContentModal;
	activeNavigationMobile: boolean;
	valueSearch: string;
	themeDark: boolean;
}

interface ContentModal {
	id: number;
	img: string;
	title: string;
	overview: string;
	date: string;
}
