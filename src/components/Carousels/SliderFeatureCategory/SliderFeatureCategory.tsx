import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { arrayCategories } from './data/arrayCategories';
import { IoChevronForwardOutline } from 'react-icons/io5';

import './sliderFeatureCategory.css';

const option = {
	gap: '1rem',
	perMove: 1,

	breakpoints: {
		1200: {
			gap: '1rem',
			perPage: 2,
			perMove: 1,
		},

		768: {
			gap: '1rem',
			perPage: 1,
			perMove: 1,
		},
	},
};

export const SliderFeatureCategory = () => {
	return (
		<div className='container-slider-categories px-3 my-3'>
			<Splide
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-black dark:text-white font-["Nunito Sans"] font-bold text-xl p-1 my-3'>
					Featured Categories
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
					{arrayCategories.map((category) => (
						<SplideSlide
							key={category.name}
							className='card-category-wrapper'>
							<img
								src={category.img}
								alt='Image Category'
							/>
							<div className='name-category'>
								<h5 className='text-white font-bold text-xl'>{category.name}</h5>
							</div>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};
