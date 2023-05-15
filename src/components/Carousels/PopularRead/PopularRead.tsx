import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { IoPerson } from 'react-icons/io5';

import './PopularRead.css';

export const PopularReads = () => {
	const moviesUpComing = useAppSelector((state) => state.movie.moviesUpComing);
	const navigate = useNavigate();

	return (
		<div className='p-3 h-full'>
			<h2 className='text-black dark:text-white text-xl font-bold my-3'>Popular Reads</h2>

			<div className='popular-read'>
				{moviesUpComing.slice(0, 6).map((movie) => (
					<div
						className='card-popular-read'
						key={movie.id}>
						<div className='img-popular-read'>
							<div className='img-popular-read-wrapper w-full h-full'>
								<img
									src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
									alt='Image Backdrop'
									className='rounded-xl cursor-pointer hover:opacity-50 transition-all h-full object-cover'
									onClick={() => navigate(`/read-more/${movie.id}`)}
								/>
							</div>
						</div>

						<div className='data-popular-read'>
							<h5 className='text-black dark:text-white font-bold text-xl mb-1'>
								<Link to={`/read-more/${movie.id}`}>{movie.title}</Link>
							</h5>

							<span className='text-black dark:text-white block'>{movie.release_date}</span>
							<span className='text-black dark:text-white block'>
								Voto Promedio: {movie.vote_average}
							</span>

							<span className='text-black dark:text-white flex gap-2 items-center'>
								<IoPerson className='text-black dark:text-white' />
								Vote Count: {movie.vote_count}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
