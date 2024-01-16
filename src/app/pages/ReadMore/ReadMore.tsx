import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchMovieId, setClearMovieSearchState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { LazyImage, Spinner } from '@/components';
import { AsideReadMore, FormReadMore, BodyReadMore } from './components';

import './ReadMore.css';

export const ReadMore = () => {
	const { movieReadMoreId } = useAppSelector((state) => state.movie);
	const { id } = useParams();
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		dispatch(fetchSearchMovieId(id));

		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});

		return () => {
			dispatch(setClearMovieSearchState([]));
		};
	}, [id]);

	return (
		<div className='container-page-read-more bg-[#0D0D10] h-full p-5 transition-all'>
			{Object.keys(movieReadMoreId).length !== 0 ? (
				<>
					<section>
						<div className='img-read-more relative'>
							<LazyImage
								placeholderSrc={`https://image.tmdb.org/t/p/w1280_filter(blur)${movieReadMoreId.backdrop_path}`}
								placeholderStyle={{ borderRadius: '10px', height: '100%' }}
								src={`https://image.tmdb.org/t/p/w1280${movieReadMoreId.backdrop_path}`}
								className='rounded-lg w-full cursor-pointer transition-all hover:opacity-80 h-full object-cover'
								alt='Image Poster'
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
