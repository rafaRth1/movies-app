import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchGender, fetchMoviesTopRated } from '../../../store';

import './Reviews.css';

interface PropsFilter {
	id: number;
	name: string;
}

export const Reviews = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { moviesTopRated, genders } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchGender());
		dispatch(fetchMoviesTopRated());
	}, []);

	return (
		<section className='container-page-review p-5'>
			<h3 className='text-black dark:text-white block m-3 text-3xl font-semibold font-["rubik"]'>
				Reviews
			</h3>

			<div className='content-review'>
				<div className='flex flex-wrap'>
					{moviesTopRated.map((movie) => (
						<div
							key={movie.id}
							className='card-movie-review p-3'>
							<picture className='relative'>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt='Image Poster'
									className='rounded-2xl hover:opacity-90 transition-all cursor-pointer w-full'
									onClick={() => navigate(`/read-more/${movie.id}`)}
								/>

								<div className='bg-green-800 py-3 px-5 rounded-2xl absolute right-0 bottom-0 block m-4'>
									<p className='text-white font-semibold text-xl'>{movie.vote_average}</p>
								</div>
							</picture>

							<div className='body-review'>
								<h6
									className='text-black dark:text-white font-medium my-2 cursor-pointer text-2xl font-["rubik"] dark:hover:text-indigo-700'
									onClick={() => navigate(`/read-more/${movie.id}`)}>
									{movie.original_title}
								</h6>

								<div className='creator mb-2'>
									<a
										href='#'
										className='text-black dark:text-white uppercase text-xs font-medium dark:hover:text-indigo-700'>
										{movie.title}
									</a>
								</div>

								<p className='text-black dark:text-white'>
									{movie.overview.slice(0, 160).concat('...')}
								</p>

								<div className='genders my-4'>
									{genders.map((gender: PropsFilter) => {
										if (movie.genre_ids.includes(gender.id)) {
											return (
												<p
													key={gender.id}
													className='text-white text-sm mr-2 mb-2 p-2 bg-indigo-700 rounded-2xl inline hover:bg-indigo-800 transition-all cursor-pointer'>
													{gender.name}
												</p>
											);
										}
									})}
								</div>
								<p className='text-black dark:text-white text-sm ml-2 mt-4'>{movie.release_date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
