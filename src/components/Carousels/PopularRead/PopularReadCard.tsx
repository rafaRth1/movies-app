import { Link, useNavigate } from 'react-router-dom';
import { LazyImage } from '@/components/LazyImage/LazyImage';
import { MoviesUpComing } from '@/store/movies/interfaces';

interface Props {
	movie: MoviesUpComing;
}

export const PopularReadCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='card-popular-read'>
			<div className='card-popular-read-img relative'>
				<LazyImage
					placeholderOverlayStyle={{ left: '0px' }}
					placeholderSrc={`https://image.tmdb.org/t/p/w300_filter(blur)${movie.poster_path}`}
					placeholderStyle={{ left: '0px', paddingInline: '14px', borderRadius: '5px' }}
					src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
					style={{ borderRadius: '5px', objectFit: 'cover', cursor: 'pointer' }}
					alt={`Image ${movie.title}`}
					onClick={() => navigate(`/read-more/${movie.id}`)}
				/>
			</div>

			<div className='data-popular-read'>
				<h3 className='text-white text-lg'>
					<Link
						to={`/read-more/${movie.id}`}
						className='hover:text-indigo-700 transition-colors'>
						{movie.title}
					</Link>
				</h3>

				<span className='text-white text-sm my-2'>{movie.release_date}</span>

				<span className='block text-white'> Vote Count: {movie.vote_count}</span>
			</div>
		</div>
	);
};
