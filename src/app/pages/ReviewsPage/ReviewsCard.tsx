import { Link, useNavigate } from 'react-router-dom';
import { AverageComponent, LazyImage } from '../../../components';
import { genresData } from '../../../data/genres';
import { MoviesTopRated } from '../../../store/movies/interfaces';

interface Props {
	movie: MoviesTopRated;
}

export const ReviewsCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='card-movie-review p-4'>
			<div className='card-review-img relative'>
				<LazyImage
					placeholderStyle={{ height: '100%', borderRadius: '16px' }}
					placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.backdrop_path}`}
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					className='rounded-2xl hover:opacity-90 transition-all cursor-pointer w-full h-full object-cover'
					alt={`Image ${movie.title}`}
					onClick={() => navigate(`/read-more/${movie.id}`)}
				/>

				<AverageComponent average={movie.vote_average} />
			</div>

			<div className='body-review'>
				<p className='text-black dark:text-white text-xs mt-3'>{movie.release_date}</p>

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

				<div className='genres my-4'>
					{genresData.map((gender) =>
						movie.genre_ids.includes(gender.id) ? (
							<Link
								key={gender.id}
								to={`/genres/${gender.id}`}
								state={{ name: gender.name }}
								className='text-white text-sm mr-2 mb-2 p-2 bg-indigo-700 rounded-2xl inline hover:bg-indigo-800 transition-all cursor-pointer'>
								{gender.name}
							</Link>
						) : null
					)}
				</div>
			</div>
		</div>
	);
};

// onClick={() => navigate(`/genres/${gender.id}`)}
