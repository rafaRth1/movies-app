import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useAppSelector } from '../../../hooks';
import { IoChevronForwardOutline } from 'react-icons/io5';

import './sliderFeatureReviews.css';

const option = {
	rewind: true,
	gap: '1rem',
	perMove: 1,
};

export const SliderFeatureReviews = () => {
	const { moviesTopRated } = useAppSelector((state) => state.movie);

	return (
		<div className='container-slider-review px-3 my-3'>
			<Splide
				tag='section'
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-black dark:text-white font-["Nunito Sans"] font-bold text-xl p-1 my-3'>
					Featured Review
				</h2>

				<div className='splide__arrows splide__arrows--ltr text-white'>
					<div className='relative'>
						<button
							className='splide__arrow splide__arrow--prev'
							type='button'
							aria-label='Previous slide'
							aria-controls='splide01-track'>
							<IoChevronForwardOutline
								className='cursor-pointer text-black dark:text-white'
								size={20}
							/>
						</button>
						<button
							className='splide__arrow splide__arrow--next'
							type='button'
							aria-label='Next slide'
							aria-controls='splide01-track'>
							<IoChevronForwardOutline
								className='cursor-pointer text-black dark:text-white'
								size={20}
							/>
						</button>
					</div>
				</div>

				<SplideTrack>
					{moviesTopRated.slice(1, 5).map((movie) => (
						<SplideSlide
							key={movie.id}
							className='card-review-wrapper'>
							<article>
								<div className='img-feature-review relative'>
									<img
										src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
										alt='Image Poster'
									/>
									<div
										className={`rated absolute text-white top-5 right-5 px-5 py-4 rounded-2xl font-bold text-base  ${
											movie.vote_average > 8 ? 'bg-green-700' : 'bg-yellow-400'
										}`}>
										{movie.vote_average}
									</div>
								</div>

								<div className='data-review-feature text-black dark:text-white w-full'>
									<h5 className='text-2xl font-medium mb-3'>{movie.title}</h5>
									<span className='block text-sm mb-3'>{movie.release_date}</span>
									<p className='text-justify'>{movie.overview}</p>
								</div>
							</article>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};
