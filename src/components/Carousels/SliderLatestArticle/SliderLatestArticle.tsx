import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getContentModal, showModal } from '../../../store';

import { IoChevronForwardOutline } from 'react-icons/io5';
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
				<h2 className='text-black dark:text-white font-["Nunito Sans"] font-bold text-xl p-1 my-3'>
					Latest Article
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
					<SplideSlide className='card-article-one-wrapper'>
						{moviesUpComing.slice(0, 3).map((movie) => (
							<figure key={movie.id}>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt='IMG'
									className='w-full h-full object-cover rounded-3xl cursor-pointer'
									onClick={() =>
										handleShowModal({
											id: movie.id,
											img: movie.backdrop_path,
											title: movie.original_title,
											overview: movie.overview,
											date: movie.release_date,
										})
									}
								/>
							</figure>
						))}
					</SplideSlide>

					<SplideSlide className='card-article-two-wrapper'>
						{moviesUpComing.slice(5, 11).map((movie) => (
							<figure key={movie.id}>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt='IMG'
									className='w-full h-full object-cover rounded-3xl cursor-pointer'
									onClick={() =>
										handleShowModal({
											id: movie.id,
											img: movie.backdrop_path,
											title: movie.original_title,
											overview: movie.overview,
											date: movie.release_date,
										})
									}
								/>
							</figure>
						))}
					</SplideSlide>
				</SplideTrack>
			</Splide>
		</div>
	);
};
