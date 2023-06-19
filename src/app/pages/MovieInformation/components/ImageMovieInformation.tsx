import { useAppSelector } from '../../../../hooks';

export const ImageMovieInformation = () => {
	const { movieInformation } = useAppSelector((state) => state.movie);

	return (
		<div className='img-movie-information relative'>
			<img
				src={`https://image.tmdb.org/t/p/w1280${movieInformation?.backdrop_path}`}
				alt=''
				className='h-full w-full object-cover rounded-md'
			/>
		</div>
	);
};
