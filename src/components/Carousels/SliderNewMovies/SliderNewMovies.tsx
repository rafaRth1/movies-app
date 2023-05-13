import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { IoChevronForwardOutline } from 'react-icons/io5';

import './sliderNewMovies.css';

const option: Options = {
	gap: '1rem',
	perPage: 6,
	perMove: 1,

	breakpoints: {
		1200: {
			gap: '1rem',
			perPage: 3,
			perMove: 1,
		},
	},
};

export const SliderNewMovies = () => {
	const { moviesPopular } = useAppSelector((state) => state.movie);
	const navigate = useNavigate();

	return (
		<div className='container-slider-new-movies cursor-pointer'>
			<Splide
				tag='section'
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-black dark:text-white font-["Nunito Sans"] font-bold text-xl p-1 my-3'>
					New Movies Archive
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
					{moviesPopular.map((movie) => (
						<SplideSlide
							key={movie.id}
							className='card-new-movies-wrapper'
							onClick={() => navigate(`/movie-information/${movie.id}`)}>
							<article>
								<div className='image-card-new-movies'>
									<img
										src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
										alt='Img Poster'
									/>
								</div>
								<div className='info-card-movie'>
									<h5 className='text-black dark:text-white font-bold text-base mt-5'>
										{movie.title}
									</h5>
									<small className='text-black dark:text-white'>{movie.release_date}</small>
								</div>
							</article>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};

export default SliderNewMovies;
