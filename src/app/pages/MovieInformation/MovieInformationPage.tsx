import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImageMovieInformation } from './components';
import { BodyMovieInformation } from './components/BodyMovieInformation/BodyMovieInformation';
import { fetchMovieInformation } from '../../../store';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Spinner } from '../../../components';

import './MovieInformation.css';

export const MovieInformationPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { movieInformation } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchMovieInformation(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className='content-movie-information'>
			{Object.keys(movieInformation).length !== 0 ? (
				<div className='movie-information'>
					<ImageMovieInformation />
					<BodyMovieInformation />
				</div>
			) : (
				<Spinner className='h-40' />
			)}
		</div>
	);
};

export default MovieInformationPage;
