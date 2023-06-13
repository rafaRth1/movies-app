import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { startMoviesNewShow } from '../../../store/movies';
import {
	PopularReads,
	SliderFeatureCategory,
	SliderFeatureReviews,
	SliderForYou,
	SliderLatestArticle,
	SliderNewMovies,
} from '../../../components/Carousels';

import './MainPage.css';
import { Spinner } from '../../../components';

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const { moviesPopular } = useAppSelector((state) => state.movie);

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		dispatch(startMoviesNewShow(cancelToken));

		return () => {
			cancelToken.cancel();
		};
	}, []);

	return (
		<div className='bg-neutral-100 dark:bg-neutral-800 transition-all p-2'>
			{moviesPopular.length === 0 ? (
				<Spinner className='h-40' />
			) : (
				<>
					<SliderForYou />

					<section className='slides'>
						<div className='slides-content'>
							<SliderLatestArticle />
							<SliderFeatureReviews />
						</div>

						<div className='content-popular-read'>
							<PopularReads />
						</div>
					</section>

					<SliderNewMovies />
				</>
			)}
		</div>
	);
};

export default MainPage;
