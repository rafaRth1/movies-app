import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchMovieId } from '../../store';
import { Spinner } from '../../components';
import { AsideReadMore, FormReadMore, BodyReadMore } from './components';
import ImageDefault from '../../assets/ImageDefault_1280x720.png';

export const ReadMore = () => {
	const { movieReadMoreId, loading } = useAppSelector((state) => state.movie);
	const { id } = useParams();
	const dispatch = useAppDispatch();

	console.log('A');

	useEffect(() => {
		dispatch(fetchSearchMovieId(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className='flex flex-col-reverse xl:flex-row bg-neutral-100 dark:bg-neutral-800 h-full xl:mt-5 px-5 transition-all'>
			<section className='xl:w-3/5'>
				{!loading ? (
					<img
						src={
							!!movieReadMoreId.backdrop_path
								? `https://image.tmdb.org/t/p/original${movieReadMoreId.backdrop_path}`
								: ImageDefault
						}
						alt='Image-Poster'
						className='rounded-3xl'
					/>
				) : (
					<Spinner />
				)}

				<BodyReadMore movieReadMoreId={movieReadMoreId} />
				<FormReadMore />
			</section>

			<AsideReadMore movieReadMoreId={movieReadMoreId} />
		</div>
	);
};

export default ReadMore;
