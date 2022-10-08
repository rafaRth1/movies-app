import { useNavigate } from 'react-router-dom';
import { SliderComponent } from '../../components/carousel';
import { useAppSelector } from '../../hooks/useRedux';
import { ResultMoviePopular } from '../../interfaces/movieInterfaces';

import './sliderNewMovies.css';

export const SliderNewMovies = () => {
	const { moviesPopular } = useAppSelector((state) => state.movie);
	const navigate = useNavigate();

	return (
		<div className='container-slider-new-movies p-3 cursor-pointer'>
			<SliderComponent
				subTitle='New Movies Archive'
				styles={{ height: '420px' }}>
				{moviesPopular.map((movie: ResultMoviePopular) => (
					<div
						key={movie.id}
						className='card-new-movies relative'
						onClick={() => navigate(`/movie-archive/movie-information/${movie.id}`)}>
						<div className='image-card-new-movies'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt='Img Poster'
							/>
						</div>
						<div className='info-card-movie absolute'>
							<h5 className='text-black dark:text-white font-mediun text-sm mt-2'>{movie.title}</h5>
							<small className='text-black dark:text-white text-sm'>{movie.release_date}</small>
						</div>
					</div>
				))}
			</SliderComponent>
		</div>
	);
};

export default SliderNewMovies;
