import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchResultSearch } from '../../../store';
import { usePagination, useAppDispatch, useAppSelector } from '../../../hooks';
import { LazyImage, Pagination, Spinner } from '../../../components';
import { MoviesResultSearch } from '../../../store/movies/interfaces';
import './ResultSearch.css';

export const ResultSearch = () => {
	const { moviesResultSearch, loading } = useAppSelector((state) => state.movie);
	const { name } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { currentPage, setCurrentPage, totalNumPages, moviesPagination, amountPage } =
		usePagination(moviesResultSearch);

	useEffect(() => {
		dispatch(fetchResultSearch(name));
	}, [name]);

	return (
		<div className='container-page-result p-5'>
			<h3 className='text-black dark:text-white block m-3 text-3xl font-semibold'>{`Search Results for '${name}'`}</h3>

			{loading ? (
				<div className='w-full h-40'>
					<Spinner />
				</div>
			) : (
				<div className='content-result flex flex-wrap'>
					{moviesPagination.map((movies: MoviesResultSearch) => (
						<div
							key={movies.id}
							className='card-now-playing text-white p-2'>
							<div className='card-now-playing-img relative'>
								<LazyImage
									placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movies.poster_path}`}
									placeholderStyle={{ borderRadius: '10px', height: '100%' }}
									src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
									className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80 object-cover'
									style={{ height: '100%' }}
									alt='Image Poster'
									onClick={() => navigate(`/movie-information/${movies.id}`)}
								/>
							</div>

							<div className='my-3 p-2'>
								<h6 className='text-black dark:text-white hover:text-indigo-700 dark:hover:text-indigo-700 font-medium mb-3 '>
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
				movies={moviesResultSearch}
				totalNumPages={totalNumPages}
				name={name}
			/>
		</div>
	);
};

export default ResultSearch;
