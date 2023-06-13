import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImageMovieInformation } from './components';
import { BodyMovieInformation } from './components/BodyMovieInformation/BodyMovieInformation';
import { fetchMovieInformation } from '../../../store';
import { useAppDispatch } from '../../../hooks';

import './MovieInformation.css';

export const MovieInformationPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchMovieInformation(id));
	}, []);

	return (
		<div className='content-movie-information'>
			<div className='movie-information'>
				<ImageMovieInformation />
				<BodyMovieInformation />
			</div>
		</div>
	);
};

export default MovieInformationPage;
