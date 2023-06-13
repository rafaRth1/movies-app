import { SplideSlide } from '@splidejs/react-splide';
import { MoviesTopRated } from '../../../store/movies/interfaces';
import { LazyImage } from '../../LazyImage/LazyImage';

interface Props {
	movie: MoviesTopRated;
}

export const FeatureReviewsCard = ({ movie }: Props) => {
	return (
		<SplideSlide>
			<div className='card-review-wrapper'>
				<div className='img-feature-review relative'>
					<LazyImage
						placeholderOverlayStyle={{ borderRadius: '10px' }}
						placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.backdrop_path}`}
						placeholderStyle={{ borderRadius: '10px' }}
						src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						style={{ borderRadius: '10px' }}
					/>
				</div>

				<div className='data-review-feature text-black dark:text-white w-full'>
					<h3 className='text-xl font-medium mb-3'>{movie.title}</h3>
					<span className='block text-sm mb-3'>{movie.release_date}</span>
					<p className='text-justify'>{movie.overview}</p>
				</div>
			</div>
		</SplideSlide>
	);
};

{
	/* <SplideSlide className='card-review-wrapper'>
<article className='cursor-grab'>
	<div className='img-feature-review relative'>
		<LazyImage
			placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.backdrop_path}`}
			src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		/>
	</div>

	<div className='data-review-feature text-black dark:text-white w-full'>
		<h3 className='text-xl font-medium mb-3'>{movie.title}</h3>
		<span className='block text-sm mb-3'>{movie.release_date}</span>
		<p className='text-justify'>{movie.overview}</p>
	</div>
</article>
</SplideSlide> */
}
