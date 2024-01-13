import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getContentModal, showModal } from '@/store';
import { Arrows } from '@/components/Arrows/Arrows';
import { SliderLatestArticleCard } from './SliderLatestArticleCard';

import './sliderLatestArticle.css';

const option = {
	gap: '1rem',
	perMove: 1,
};

export const SliderLatestArticle = () => {
	const { moviesUpComing } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();

	const handleShowModal = (dateMovies: object) => {
		dispatch(showModal(true));
		dispatch(getContentModal(dateMovies));
	};

	return (
		<div className='container-slider-article px-3 my-3'>
			<Splide
				hasTrack={false}
				options={option}
				aria-label='Carousel'>
				<h2 className='text-white font-semibold text-xl p-1 my-3'>Latest Article</h2>

				<Arrows />

				<SplideTrack>
					<SplideSlide className='card-article-one-wrapper'>
						{moviesUpComing.slice(0, 3).map((movie) => (
							<SliderLatestArticleCard
								key={movie.id}
								movie={movie}
							/>
						))}
					</SplideSlide>

					<SplideSlide className='card-article-two-wrapper'>
						{moviesUpComing.slice(5, 11).map((movie) => (
							<SliderLatestArticleCard
								key={movie.id}
								movie={movie}
							/>
						))}
					</SplideSlide>
				</SplideTrack>
			</Splide>
		</div>
	);
};
