import { DataDetails } from '../../interfaces/dataDetails';
import { Movies } from './types';

export const initialState: Movies = {
	loading: false,
	moviesPopular: [],
	moviesUpComing: [],
	moviesTopRated: [], // Movies Reviews
	moviesNowPlaying: [],
	movieReadMoreId: {},
	resultMoviesSearch: [],
	movieInformationId: {} as DataDetails,
	genders: [],
	error: false,
	modal: false,
	modalSearch: false,
	activeNavigationMobile: false,
	valueSearch: '',
	themeDark: true,
	contentModal: {
		id: 0,
		img: '',
		title: '',
		overview: '',
		date: '',
	},
};
