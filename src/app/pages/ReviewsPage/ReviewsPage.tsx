import { useEffect } from 'react';
import { fetchMoviesTopRated } from '@/store';
import { Spinner } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { ReviewsCard } from './ReviewsCard';

import './Reviews.css';

export const ReviewsPage = () => {
	const dispatch = useAppDispatch();
	const { moviesTopRated, loading } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchMoviesTopRated());
	}, []);

	return (
		<section className='container-page-review p-4'>
			<h1 className='text-white block m-3 text-3xl font-semibold'>Reviews</h1>

			{loading ? (
				<Spinner className='h-40' />
			) : (
				<div className='content-review flex flex-wrap'>
					{moviesTopRated.map((movie) => (
						<ReviewsCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default ReviewsPage;
