import { Link } from 'react-router-dom';
import { Spinner } from '../../../components';
import { useAppSelector } from '../../../hooks';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { IoChevronForwardOutline } from 'react-icons/io5';

import './SliderForYou.css';

const option = {
	rewind: true,
	gap: '1rem',
	perPage: 3,
	perMove: 1,

	breakpoints: {
		1200: {
			gap: '1rem',
			perPage: 2,
			perMove: 1,
		},

		990: {
			gap: '1rem',
			perPage: 1,
			perMove: 1,
		},
	},
};

export const SliderForYou = () => {
	const { moviesPopular } = useAppSelector((state) => state.movie);

	return (
		<div className='container-slider-foryou px-3 my-3'>
			{moviesPopular.length === 0 ? (
				<Spinner />
			) : (
				<Splide
					tag='section'
					options={option}
					hasTrack={false}
					aria-label='Carousel'>
					<h2 className='text-black dark:text-white font-["Nunito Sans"] font-bold text-xl p-1 my-3'>
						For You
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

					<SplideTrack style={{ height: '430px' }}>
						{moviesPopular.map((movie) => (
							<SplideSlide
								key={movie.id}
								className='card-for-you-wrapper'>
								<article>
									<img
										src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
										alt='Img Movie'
									/>

									<div className='action-buttons absolute left-0 right-0 bottom-0 z-10'>
										<div className='mb-3'>
											<Link
												to={`/read-more/${movie.id}`}
												className='text-white text-xl block w-full whitespace-normal'>
												{movie.original_title}
											</Link>
										</div>

										<div className='pb-2'>
											<Link
												to={`/read-more/${movie.id}`}
												className='text-white text-sm z-10 bg-indigo-800 hover:bg-indigo-900 transition-colors p-2 rounded-3xl'>
												Read More
											</Link>
										</div>
									</div>
								</article>
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			)}
		</div>
	);
};
