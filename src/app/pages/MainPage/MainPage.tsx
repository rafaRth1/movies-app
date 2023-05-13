import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks';
import { startMoviesNewShow } from '../../../store/movies';
import {
	PopularReads,
	SliderFeatureCategory,
	SliderFeatureReviews,
	SliderForYou,
	SliderLatestArticle,
	SliderNewMovies,
} from '../../../components/Carousels';

import '@splidejs/react-splide/css';
import './MainPage.css';

export const MainPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(startMoviesNewShow());
	}, []);

	return (
		<div className='bg-neutral-100 dark:bg-neutral-800 transition-all p-2'>
			<SliderForYou />

			<section className='slides'>
				<div className='slides-content'>
					<SliderLatestArticle />
					<SliderFeatureCategory />
					<SliderFeatureReviews />
				</div>

				<div className='content-popular-read'>
					<PopularReads />
				</div>
			</section>

			<SliderNewMovies />
		</div>
	);
};

export default MainPage;
