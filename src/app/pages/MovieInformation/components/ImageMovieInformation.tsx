import { Spinner } from '../../../../components';

import ImageDefault from '../../../../assets/ImageDefault_1280x720.png';
import { useAppSelector } from '../../../../hooks';

export const ImageMovieInformation = () => {
	const { movieInformation, loading } = useAppSelector((state) => state.movie);

	return (
		<div className='img-movie-information w-full bg-center bg-cover'>
			{loading ? (
				<Spinner />
			) : (
				<img
					src={
						!!movieInformation?.backdrop_path
							? `https://image.tmdb.org/t/p/w780${movieInformation?.backdrop_path}`
							: ImageDefault
					}
					alt='Image BackDrop'
					className='w-full h-full object-cover'
				/>
			)}
		</div>
	);
};
