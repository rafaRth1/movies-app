import { Link, useNavigate } from 'react-router-dom';
import { AverageComponent, LazyImage } from '../../../components';
import { MoviesNowPlaying } from '../../../store/movies/interfaces';

interface Props {
	movie: MoviesNowPlaying;
}

export const MovieArchiveCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='card-movie-archive p-2'>
			<div className='card-movie-archive-img relative'>
				<LazyImage
					placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.poster_path}`}
					placeholderStyle={{ borderRadius: '24px', height: '100%' }}
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80 h-full object-cover'
					onClick={() => navigate(`/movie-information/${movie.id}`)}
					alt='Image Poster'
				/>

				<AverageComponent average={movie.vote_average} />
			</div>

			<div className='my-3 p-2'>
				<h6 className='text-black dark:text-white font-semibold mb-3 text-lg hover:text-indigo-700 dark:hover:text-indigo-700'>
					<Link to={`/movie-information/${movie.id}`}>{movie.title}</Link>
				</h6>
				<p className='text-xs text-black dark:text-white'>{movie.release_date.slice(0, 4)}</p>
			</div>
		</div>
	);
};