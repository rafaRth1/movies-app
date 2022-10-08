import { useAppSelector } from '../../hooks';
import { SliderComponent } from '../../components/carousel';
import { ResultTopRated } from '../../interfaces/topRated';
import './sliderFeatureReviews.css';

export const SliderFeatureReviews = () => {
	const movie = useAppSelector((state) => state.movie.moviesTopRated);
	const movieTopRated = movie.slice(1, 5);

	return (
		<div className='container-slider-review'>
			<SliderComponent subTitle='Featured Review'>
				{movieTopRated.map((movie: ResultTopRated) => (
					<div
						key={movie.id}
						className='feature-review-card'>
						<div className='img-feature-review relative'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt='Image Poster'
							/>
							<div
								className={`rated absolute text-white top-5 right-5 px-5 py-4 rounded-2xl font-medium  ${
									movie.vote_average > 8 ? 'bg-green-700' : 'bg-yellow-400'
								}`}>
								{movie.vote_average}
							</div>
						</div>
						<div className='data-review-feature text-black dark:text-white'>
							<h5 className='text-2xl font-medium mb-3'>{movie.title}</h5>
							<span className='block text-sm mb-3'>{movie.release_date}</span>
							<p className='text-justify pr-2'>{movie.overview.slice(0, 300).concat('...')}</p>
						</div>
					</div>
				))}
			</SliderComponent>
		</div>
	);
};
