import { Link, useNavigate } from 'react-router-dom';
import { LazyImage } from '@/components';
import { MoviesGenreType } from '@/store/movies/interfaces/';

interface Props {
	movie: MoviesGenreType;
}

export const GenresCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='card-genres text-white p-2'>
			<div className='card-genres-img relative'>
				<LazyImage
					placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.poster_path}`}
					placeholderStyle={{ height: '100%', borderRadius: '10px' }}
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					className='transition-all hover:opacity-80'
					style={{ height: '100%', borderRadius: '10px', width: '100%', cursor: 'pointer' }}
					alt={`Image ${movie.title}`}
					onClick={() => navigate(`/movie-information/${movie.id}`)}
				/>
			</div>
			<div className='my-3 p-2'>
				<h5 className='text-white font-medium mb-3 text-lg hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors'>
					<Link to={`/movie-information/${movie.id}`}>{movie.title}</Link>
				</h5>
				<p className='text-xs'>{movie.release_date?.slice(0, 4)}</p>
			</div>
		</div>
	);
};
