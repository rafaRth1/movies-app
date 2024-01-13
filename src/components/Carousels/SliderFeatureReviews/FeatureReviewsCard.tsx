import { SplideSlide } from '@splidejs/react-splide';
import { MoviesTopRated } from '@/store/movies/interfaces';
import { LazyImage } from '@/components//LazyImage/LazyImage';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
	movie: MoviesTopRated;
}

export const FeatureReviewsCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<SplideSlide>
			<div className='card-review-wrapper'>
				<div className='img-feature-review relative'>
					<LazyImage
						placeholderOverlayStyle={{ borderRadius: '10px' }}
						placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.backdrop_path}`}
						placeholderStyle={{ borderRadius: '10px' }}
						src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						style={{ borderRadius: '10px', cursor: 'pointer' }}
						alt={`Image ${movie.title}`}
						onClick={() => navigate(`/read-more/${movie.id}`)}
					/>
				</div>

				<div className='data-review-feature text-white w-full'>
					<Link
						to={`/read-more/${movie.id}`}
						className='text-xl font-medium mb-3'>
						{movie.title}
					</Link>
					<span className='block text-sm mb-3'>{movie.release_date}</span>
					<p className='text-justify'>{movie.overview}</p>
				</div>
			</div>
		</SplideSlide>
	);
};
