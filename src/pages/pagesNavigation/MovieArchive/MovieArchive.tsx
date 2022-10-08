import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchNowPlaying } from '../../../store';
import { usePagination, useAppDispatch, useAppSelector } from '../../../hooks';
import { Pagination, Spinner } from '../../../components';
import { ResultNowPlaying } from '../../../interfaces/nowPlaying';

export const MovieArchive = () => {
	const { moviesNowPlaying, loading } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { currentPage, setCurrentPage, totalNumPages, moviesPagination, amountPage } = usePagination(moviesNowPlaying);

	useEffect(() => {
		dispatch(fetchNowPlaying());
	}, []);

	return (
		<div className='content-movie-archive'>
			<h3 className='text-black dark:text-white text-2xl font-medium block my-3'>Movies</h3>
			{loading ? (
				<div className='w-full h-40'>
					<Spinner />
				</div>
			) : (
				<div className='movies-now-playing flex flex-wrap'>
					{moviesPagination.map((movies: ResultNowPlaying) => (
						<div
							key={movies.id}
							className='card-now-playing text-black dark:text-white px-3 basis-1/2 md:basis-1/3 xl:basis-1/6'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
								alt='Image Poster'
								className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80'
								onClick={() => navigate(`/movie-archive/movie-information/${movies.id}`)}
							/>
							<div className='my-3 p-2'>
								<h6 className='text-black dark:text-white font-medium mb-3'>
									<Link to={`/movie-archive/movie-information/${movies.id}`}>{movies.title}</Link>
								</h6>
								<p className='text-xs'>{movies.release_date.slice(0, 4)}</p>
							</div>
						</div>
					))}
				</div>
			)}

			<Pagination
				amountPage={amountPage}
				movies={moviesNowPlaying}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalNumPages={totalNumPages}
			/>
		</div>
	);
};

export default MovieArchive;
