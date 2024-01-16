import { Splide, SplideTrack } from '@splidejs/react-splide';
import { useAppSelector } from '@/hooks';
import { Arrows } from '@/components';
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
		<div className='container-slider-foryou relative px-3 my-3 z-20'>
			<div className='absolute w-full h-full  gradients-one flex justify-evenly items-center z-0'>
				<div className='w-[250px] h-[250px] rounded-full bg-[#3730A3] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#B84234] blur-[150px]'></div>
				<div className='w-[250px] h-[250px] rounded-full bg-[#881cf8] blur-[150px]'></div>
			</div>

			<Splide
				tag='section'
				options={option}
				hasTrack={false}
				aria-label='Carousel'>
				<h2 className='text-white font-semibold text-xl p-1 my-3'>For you</h2>

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
