import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/';
import { handleResetStateMovieInformation, startMoviesNewShow } from '@/store/movies';
import { Spinner } from '@/components';
import {
	PopularReads,
	SliderFeatureReviews,
	SliderForYou,
	SliderLatestArticle,
	SliderNewMovies,
} from '@/components/Carousels';

import './MainPage.css';

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const { moviesPopular } = useAppSelector((state) => state.movie);

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		dispatch(startMoviesNewShow(cancelToken));
		dispatch(handleResetStateMovieInformation({}));

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

					<section className='container-slider-grid'>
						<div className='slider-grid-column-one'>
							<SliderLatestArticle />
							<SliderFeatureReviews />
						</div>

						<div className='slider-grid-column-two'>
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
