import { SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { MoviesPopular } from '@/store/movies/interfaces';
import { LazyImage } from '@/components/LazyImage/LazyImage';

// https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg

interface Props {
	movie: MoviesPopular;
}

export const SliderForYouCard = ({ movie }: Props) => {
	return (
		<SplideSlide>
			<div className='card-for-you-wrapper'>
				<div className='card-for-you-img'>
					<LazyImage
						placeholderSrc={`https://image.tmdb.org/t/p/w780_filter(blur)${movie.backdrop_path}`}
						src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
						alt={`Image ${movie.original_title}`}
					/>
				</div>

				<div className='action-buttons absolute left-0 right-0 bottom-0 z-10'>
					<div className='mb-3'>
						<Link
							to={`/read-more/${movie.id}`}
							className='text-white text-lg block w-full whitespace-normal'>
							{movie.original_title}
						</Link>
					</div>

					<div className='mb-3'>
						<Link
							to={`/read-more/${movie.id}`}
							className='text-white z-10 bg-gradient-to-r from-[#3754ea] to-[#881cf8] py-3 px-4 rounded-lg'>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</SplideSlide>
	);
};
