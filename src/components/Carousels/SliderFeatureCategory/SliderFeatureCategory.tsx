import { Splide, SplideTrack } from '@splidejs/react-splide';
import { arrayCategories } from './data/arrayCategories';
import { Arrows } from '../../../components';
import { SliderFeatureCategoryCard } from './SliderFeatureCategoryCard';

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
				<h2 className='text-black dark:text-white font-semibold text-xl p-1 my-3'>Featured Categories</h2>

				<Arrows />

				<SplideTrack>
					{arrayCategories.map((category) => (
						<SliderFeatureCategoryCard
							key={category.name}
							category={category}
						/>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};
