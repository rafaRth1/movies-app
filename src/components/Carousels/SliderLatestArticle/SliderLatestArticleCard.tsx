import { getContentModal, showModal } from '../../../store';
import { useAppDispatch } from '../../../hooks';
import { MoviesUpComing } from '../../../store/movies/interfaces';
import { LazyImage } from '../../LazyImage/LazyImage';

interface Props {
	movie: MoviesUpComing;
}

export const SliderLatestArticleCard = ({ movie }: Props) => {
	const dispatch = useAppDispatch();

	const handleShowModal = (dateMovies: object) => {
		dispatch(showModal(true));
		dispatch(getContentModal(dateMovies));
	};

	return (
		<div className='relative'>
			<LazyImage
				placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movie.backdrop_path}`}
				placeholderStyle={{
					height: '100%',
					left: '0px',
					top: '0px',
					padding: '10px',
					borderRadius: '32px',
				}}
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
				style={{ borderRadius: '20px', padding: '10px' }}
				className='w-full h-full object-cover cursor-pointer'
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
		</div>
	);
};
