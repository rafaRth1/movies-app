import { useAppDispatch } from '../../../hooks';
import { ResultMoviePopular } from '../../../interfaces/movieInterfaces';
import { getContentModal, showModal } from '../../../store';

interface Props {
	selectFirstImagePanel: any[];
	selectTwoImagePanel: any[];
}

export const PanelsLatestArticle = ({ selectFirstImagePanel, selectTwoImagePanel }: Props) => {
	const dispatch = useAppDispatch();

	const handleShowModal = (dateMovies: object) => {
		dispatch(getContentModal(dateMovies));
		dispatch(showModal(true));
	};

	return (
		<>
			<div className='card-article'>
				<div className='card-artcle-one'>
					{selectFirstImagePanel.map((movie: ResultMoviePopular) => (
						<div
							key={movie.id}
							className='card-article-content-one'>
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
						</div>
					))}
				</div>

				<div className='card-article-two'>
					{selectTwoImagePanel.map((movie: ResultMoviePopular) => (
						<div
							key={movie.id}
							className='card-article-content-two'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt='IMG'
								className='h-full object-cover rounded-3xl cursor-pointer'
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
					))}
				</div>
			</div>
		</>
	);
};
