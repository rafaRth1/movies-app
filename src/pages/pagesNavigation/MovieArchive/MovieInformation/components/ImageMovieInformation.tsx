import { DataDetails } from '../../../../../interfaces/dataDetails';
import ImageDefault from '../../../../../assets/ImageDefault_1280x720.png';
import { Spinner } from '../../../../../components';

interface Props {
	dataMovie: DataDetails | undefined;
	loading: boolean;
}

export const ImageMovieInformation = ({ dataMovie, loading }: Props) => {
	return (
		<div className='img-movie-information w-full bg-center bg-cover'>
			{loading ? (
				<Spinner />
			) : (
				<img
					src={
						!!dataMovie?.backdrop_path
							? `https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`
							: ImageDefault
					}
					alt='Image BackDrop'
					className='w-full h-full object-cover'
				/>
			)}
		</div>
	);
};
