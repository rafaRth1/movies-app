import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchGender, fetchMoviesTopRated } from '../../../store';
import { ResultTopRated } from '../../../interfaces/topRated';

interface PropsFilter {
	id: number;
	name: string;
}

export const Reviews = () => {
	const { moviesTopRated, genders } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchGender());
		dispatch(fetchMoviesTopRated());
	}, []);

	return (
		<div className='content-review-page px-5 py-5'>
			<h3 className='text-black dark:text-white text-2xl font-medium block my-3'>Reviews</h3>

			<div className='movies-review'>
				<div className='flex flex-wrap'>
					{moviesTopRated.map((movie: ResultTopRated) => (
						<div
							key={movie.id}
							className='card-movie-review p-3 basis-1/2 lg:basis-2/6 relative'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt='Image Poster'
								className='rounded-2xl hover:opacity-90 transition-all cursor-pointer'
								onClick={() => navigate(`/read-more/${movie.id}`)}
							/>

							<div className='text-white font-medium text-xl bg-green-800 py-3 px-5 rounded-2xl absolute right-10 bottom-44'>
								<p>{movie.vote_average}</p>
							</div>

							<h6
								className='text-black dark:text-white font-medium my-2 cursor-pointer'
								onClick={() => navigate(`/read-more/${movie.id}`)}>
								{movie.original_title}
							</h6>
							<div className='creator mb-3'>
								<a
									href=''
									className='text-black dark:text-white uppercase text-xs font-medium'>
									By John Hamilton
								</a>
							</div>
							{genders.map((gender: PropsFilter) => {
								if (movie.genre_ids.includes(gender.id)) {
									return (
										<p
											key={gender.id}
											className='text-white text-sm mr-2 p-2 bg-indigo-700 rounded-2xl inline hover:bg-indigo-800 transition-all cursor-pointer'>
											{gender.name}
										</p>
									);
								}
							})}
							<p className='text-black dark:text-white text-sm ml-2 mt-4'>{movie.release_date}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
