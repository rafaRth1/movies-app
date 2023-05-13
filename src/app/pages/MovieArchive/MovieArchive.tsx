import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchNowPlaying } from '../../../store';
import { usePagination, useAppDispatch, useAppSelector } from '../../../hooks';
import { Pagination, Spinner } from '../../../components';

import './MovieArchive.css';

export const MovieArchive = () => {
	const { moviesNowPlaying, loading } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { currentPage, setCurrentPage, totalNumPages, moviesPagination, amountPage } =
		usePagination(moviesNowPlaying);

	useEffect(() => {
		dispatch(fetchNowPlaying());
	}, []);

	return (
		<section className='container-movie-archive'>
			<h3 className='text-black dark:text-white text-3xl font-bold block m-4'>Movies</h3>
			{loading ? (
				<div className='w-full h-40'>
					<Spinner />
				</div>
			) : (
				<>
					<div className='content-movie-archive flex flex-wrap'>
						{moviesPagination.map((movies) => (
							<div
								key={movies.id}
								className='card-movie-archive text-black dark:text-white p-2'>
								<img
									src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
									alt='Image Poster'
									className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80'
									onClick={() => navigate(`/movie-information/${movies.id}`)}
								/>
								<div className='my-3 p-2'>
									<h6 className='text-black dark:text-white font-semibold mb-3 text-lg hover:text-indigo-700 dark:hover:text-indigo-700'>
										<Link to={`/movie-information/${movies.id}`}>{movies.title}</Link>
									</h6>
									<p className='text-xs'>{movies.release_date.slice(0, 4)}</p>
								</div>
							</div>
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

export default MovieArchive;
