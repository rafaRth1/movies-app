import { Options, Splide, SplideTrack } from '@splidejs/react-splide';
import { useAppSelector } from '../../../hooks';
import { Arrows } from '../../Arrows/Arrows';

import './sliderFeatureReviews.css';
import { FeatureReviewsCard } from './FeatureReviewsCard';

const option: Options = {
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
				<h2 className='text-black dark:text-white font-semibold text-xl p-1 my-3'>Featured Review</h2>

				<Arrows />

				<SplideTrack>
					{moviesTopRated.slice(1, 5).map((movie) => (
						<FeatureReviewsCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};
