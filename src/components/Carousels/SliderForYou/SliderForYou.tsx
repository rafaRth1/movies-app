import { Arrows } from '../../../components';
import { useAppSelector } from '../../../hooks';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { SliderForYouCard } from './SliderForYouCard';

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
			<Splide
				tag='section'
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-black dark:text-white font-semibold text-xl p-1 my-3'>For You</h2>

				<Arrows />

				<SplideTrack>
					{moviesPopular.map((movie) => (
						<SliderForYouCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};
