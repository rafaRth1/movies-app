import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchResultSearch } from '../store';
import { usePagination, useAppDispatch, useAppSelector } from '../hooks';
import { Pagination, Spinner } from '../components';
import { ResultSearchMovies } from '../interfaces/ResultSearch';
import ImageDefault from '../assets/imageDefault.png';

export const ResultSearch = () => {
	const { resultMoviesSearch, loading } = useAppSelector((state) => state.movie);
	const { name } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { currentPage, setCurrentPage, totalNumPages, moviesPagination, amountPage } =
		usePagination(resultMoviesSearch);

	useEffect(() => {
		dispatch(fetchResultSearch(name));
	}, [name]);

	return (
		<div className='content-result'>
			<h3 className='text-white text-3xl font-medium mb-3'>{`Search Results for '${name}'`}</h3>

			{loading ? (
				<div className='w-full h-40'>
					<Spinner />
				</div>
			) : (
				<div className='flex flex-wrap'>
					{moviesPagination.map((movies: ResultSearchMovies) => (
						<div
							key={movies.id}
							className='card-now-playing text-white px-3 basis-1/2 md:basis-1/3 xl:basis-1/6'>
							<img
								src={
									!!movies.poster_path ? `https://image.tmdb.org/t/p/w500${movies.poster_path}` : ImageDefault
								}
								alt='Image Poster'
								className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80'
								onClick={() => navigate(`/movie-archive/movie-information/${movies.id}`)}
							/>
							<div className='my-3 p-2'>
								<h6 className='text-white font-medium mb-3'>
									<Link to={`/movie-archive/movie-information/${movies.id}`}>{movies.title}</Link>
								</h6>
							</div>
						</div>
					))}
				</div>
			)}

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				amountPage={amountPage}
				movies={resultMoviesSearch}
				totalNumPages={totalNumPages}
			/>
		</div>
	);
};

export default ResultSearch;
