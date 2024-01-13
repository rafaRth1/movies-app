import { Options, Splide, SplideTrack } from '@splidejs/react-splide';
import { useAppSelector } from '@/hooks';
import { SliderNewMoviesCard } from './SliderNewMoviesCard';
import { Arrows } from '@/components/Arrows/Arrows';

import './sliderNewMovies.css';

const option: Options = {
	rewind: true,
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

	return (
		<div className='container-slider-new-movies cursor-pointer'>
			<Splide
				tag='section'
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-white font-semibold text-xl p-1 my-3'>New Movies Archive</h2>

				<Arrows />

				<SplideTrack style={{ height: '400px' }}>
					{moviesPopular.map((movie) => (
						<SliderNewMoviesCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
};

export default SliderNewMovies;
