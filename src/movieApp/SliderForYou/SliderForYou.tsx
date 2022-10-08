import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { SliderComponent } from '../../components/carousel';
import { Spinner } from '../../components';
import { ResultMoviePopular } from '../../interfaces/movieInterfaces';

export const SliderForYou = () => {
	const moviesPopular: [] = useAppSelector((state) => state.movie.moviesPopular);

	return (
		<div className='container-slider-foryou px-3 my-3'>
			{moviesPopular.length === 0 ? (
				<Spinner />
			) : (
				<>
					<SliderComponent subTitle='For You'>
						{moviesPopular.map((movie: ResultMoviePopular) => (
							<div
								key={movie.id}
								className='card-slider px-5 relative'>
								<div className='absolute bottom-5 left-10 z-10'>
									<Link
										to={'/read-more/5450'}
										className='text-white text-xl font-medium block mb-2'>
										{movie.original_title}
									</Link>
									<Link
										to={`/read-more/${movie.id}`}
										className='text-white text-sm z-10 bg-neutral-800 hover:bg-neutral-700 transition-colors p-2 rounded-3xl'>
										Read More
									</Link>
								</div>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt='Img Movie'
								/>
							</div>
						))}
					</SliderComponent>
				</>
			)}
		</div>
	);
};
