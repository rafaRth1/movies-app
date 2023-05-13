import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchMovieId } from '../../../../store';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { AsideReadMore, FormReadMore, BodyReadMore } from '../views';
import { Spinner } from '../../../../components';

import ImageDefault from '../../../../assets/ImageDefault_1280x720.png';
import './ReadMore.css';

export const ReadMore = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { movieReadMoreId, loading } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchSearchMovieId(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className='container-read-more bg-neutral-100 dark:bg-neutral-800 h-full px-5 transition-all'>
			{!loading ? (
				<>
					<section className='xl:w-3/5 p-3'>
						<img
							src={
								!!movieReadMoreId.backdrop_path
									? `https://image.tmdb.org/t/p/w1280${movieReadMoreId.backdrop_path}`
									: ImageDefault
							}
							alt='Image-Poster'
							className='rounded-3xl'
						/>

						<BodyReadMore movieReadMoreId={movieReadMoreId} />
						<FormReadMore />
					</section>

					<AsideReadMore movieReadMoreId={movieReadMoreId} />
				</>
			) : (
				<div className='w-full flex items-center justify-center'>
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default ReadMore;
