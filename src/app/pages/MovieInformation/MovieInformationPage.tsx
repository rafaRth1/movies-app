import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BodyMovieInformation } from './components/BodyMovieInformation/BodyMovieInformation';
import { fetchMovieInformation, fetchMovieVideo, fetchRecomendMovies } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Spinner } from '@/components';

import './MovieInformation.css';

export const MovieInformationPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { movieInformation } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchMovieInformation(id));
		dispatch(fetchMovieVideo(id));
		dispatch(fetchRecomendMovies(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className='contaniner-movie-information'>
			{Object.keys(movieInformation).length !== 0 ? (
				<div className='content-movie-information'>
					<div className='img-movie-information relative'>
						<img
							src={`https://image.tmdb.org/t/p/original/${movieInformation?.backdrop_path}`}
							alt=''
							className='h-full w-full object-cover rounded-md'
						/>
					</div>

					<BodyMovieInformation />
				</div>
			) : (
				<Spinner className='h-40' />
			)}
		</div>
	);
};

export default MovieInformationPage;
