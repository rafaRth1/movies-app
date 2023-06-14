import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchMovieId } from '../../../store';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AsideReadMore, FormReadMore, BodyReadMore } from './views';
import { LazyImage, Spinner } from '../../../components';

import './ReadMore.css';

export const ReadMore = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { movieReadMoreId } = useAppSelector((state) => state.movie);
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const onLoad = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		dispatch(fetchSearchMovieId(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className='container-page-read-more bg-neutral-100 dark:bg-neutral-800 h-full p-5 transition-all'>
			{Object.keys(movieReadMoreId).length !== 0 ? (
				<>
					<section>
						<div className='img-read-more relative'>
							<img
								src={`${
									isLoading
										? `https://image.tmdb.org/t/p/w1280_filter(blur)${movieReadMoreId.backdrop_path}`
										: `https://image.tmdb.org/t/p/w1280${movieReadMoreId.backdrop_path}`
								}`}
								alt='Image Poster'
								className='rounded-md'
								onLoad={onLoad}
							/>
						</div>

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
