import { useEffect } from 'react';
import { fetchNowPlaying } from '../../../store';
import { usePagination, useAppDispatch, useAppSelector } from '../../../hooks';
import { Pagination, Spinner } from '../../../components';
import { MovieArchiveCard } from './MovieArchiveCard';

import './MovieArchive.css';

export const MovieArchivePage = () => {
	const { moviesNowPlaying, loading } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();

	const { currentPage, setCurrentPage, totalNumPages, moviesPagination, amountPage } =
		usePagination(moviesNowPlaying);

	useEffect(() => {
		dispatch(fetchNowPlaying());
	}, []);

	return (
		<section className='container-page-movie-archive p-4'>
			<h3 className='text-black dark:text-white text-3xl font-bold block m-4'>Movies</h3>
			{loading ? (
				<Spinner className='h-40' />
			) : (
				<>
					<div className='content-movie-archive flex flex-wrap'>
						{moviesPagination.map((movie) => (
							<MovieArchiveCard
								key={movie.id}
								movie={movie}
							/>
						))}
					</div>

					<Pagination
						amountPage={amountPage}
						movies={moviesNowPlaying}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalNumPages={totalNumPages}
					/>
				</>
			)}
		</section>
	);
};

export default MovieArchivePage;
