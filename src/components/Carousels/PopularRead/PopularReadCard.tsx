import { Link, useNavigate } from 'react-router-dom';
import { LazyImage } from '../../LazyImage/LazyImage';
import { MoviesUpComing } from '../../../store/movies/interfaces';
import { IoPerson } from 'react-icons/io5';

interface Props {
	movie: MoviesUpComing;
}

export const PopularReadCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='card-popular-read'>
			<div
				className='card-popular-read-img relative'
				onClick={() => navigate(`/read-more/${movie.id}`)}>
				<LazyImage
					placeholderOverlayStyle={{ left: '0px' }}
					placeholderSrc={`https://image.tmdb.org/t/p/w300_filter(blur)${movie.poster_path}`}
					placeholderStyle={{ left: '0px', paddingInline: '14px', borderRadius: '5px' }}
					src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
					className='object-cover'
					style={{ borderRadius: '5px' }}
				/>
			</div>

			<div className='data-popular-read'>
				<h3 className='text-black dark:text-white text-xl'>
					<Link
						to={`/read-more/${movie.id}`}
						className='hover:text-indigo-700 transition-colors'>
						{movie.title}
					</Link>
				</h3>

				<span className='text-black dark:text-white text-sm my-2'>{movie.release_date}</span>

				<p className='text-black dark:text-white flex items-center'>
					<IoPerson className='text-black dark:text-white mr-2' />
					<span> Vote Count: {movie.vote_count}</span>
				</p>
			</div>
		</div>
	);
};
