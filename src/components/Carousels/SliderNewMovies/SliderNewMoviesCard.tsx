import { useNavigate } from 'react-router-dom';
import { SplideSlide } from '@splidejs/react-splide';
import { AverageComponent, LazyImage } from '../..';
import { MoviesPopular } from '../../../store/movies/interfaces';

interface Props {
	movie: MoviesPopular;
}

export const SliderNewMoviesCard = ({ movie }: Props) => {
	const navigate = useNavigate();

	return (
		<SplideSlide>
			<section
				className='card-new-movies-wrapper'
				onClick={() => navigate(`/movie-information/${movie.id}`)}>
				<div className='card-new-movies-img relative'>
					<LazyImage
						placeholderSrc={`https://image.tmdb.org/t/p/w300_filter(blur)${movie.poster_path}`}
						placeholderStyle={{ height: '100%' }}
						src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
						style={{ height: '100%' }}
						alt={`Image ${movie.title}`}
					/>

					<AverageComponent average={movie.vote_average} />
				</div>

				<div className='info-card-movie'>
					<h3 className='text-black dark:text-white font-medium text-base mt-5'>{movie.title}</h3>
					<small className='text-black dark:text-white'>{movie.release_date}</small>
				</div>
			</section>
		</SplideSlide>
	);
};
