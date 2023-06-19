import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchMoviesGenreType, handleResetStateMovieInformation } from '../../../store';
import { Spinner } from '../../../components';
import { GenresCard } from './GenresCard';

import './GenresPage.css';

export const PageGenres = () => {
	const dispatch = useAppDispatch();
	const { moviesGenreType, loading } = useAppSelector((state) => state.movie);
	const { id } = useParams();
	const { state }: any = useLocation();

	useEffect(() => {
		dispatch(fetchMoviesGenreType(id));
		dispatch(handleResetStateMovieInformation({}));
	}, [id]);

	return (
		<div className='container-page-genres p-4'>
			<h1 className='text-black dark:text-white block m-3 text-3xl font-semibold'>{state.name}</h1>

			{loading ? (
				<Spinner className='h-40' />
			) : (
				<div className='content-genres flex flex-wrap'>
					{moviesGenreType.map((movie) => (
						<GenresCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default PageGenres;
