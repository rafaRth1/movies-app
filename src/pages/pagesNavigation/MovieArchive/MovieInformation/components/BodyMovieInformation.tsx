import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Spinner } from '../../../../../components';
import { DataDetails } from '../../../../../interfaces/dataDetails';
import ImageDefault from '../../../../../assets/ImageDefault_1280x720.png';
import { useAppSelector } from '../../../../../hooks';

interface Props {
	dataMovie: DataDetails | undefined;
	loading: boolean;
}

export const BodyMovieInformation = ({ dataMovie, loading }: Props) => {
	const { valueSearch } = useAppSelector((state) => state.movie);
	const navigate = useNavigate();

	return (
		<div className='details-movie-information px-3'>
			<div className='p-4 xl:flex'>
				<div className='xl:basis-2/3 px-3'>
					<div className='flex flex-wrap'>
						<div className='title mb-3 basis-full md:hidden'>
							<h2 className='text-black dark:text-white text-4xl font-medium inline '>
								{dataMovie?.original_title}
							</h2>

							<span className='text-black dark:text-white text-sm'>{dataMovie?.release_date.slice(0, 4)}</span>

							<div className='flex items-center gap-3 my-3'>
								<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
									PG - {dataMovie?.vote_average}
								</div>
								<div className='gender text-black dark:text-white m-3'>
									{dataMovie?.genres.map((genre) => genre.name)}
								</div>
								<div className='duration-movie text-white'>{dataMovie?.runtime}mins</div>
							</div>
						</div>

						<div className='basis-1/2 xl:basis-1/3 px-3'>
							{loading ? (
								<Spinner />
							) : (
								<img
									src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}
									alt='Image Poster'
									className='rounded-3xl xl:-translate-y-14'
								/>
							)}
						</div>

						<div className='overview basis-1/2 px-3 xl:basis-2/3'>
							<div className='title mb-3 basis-full hidden md:block'>
								<h2 className='text-black dark:text-white text-4xl font-medium inline '>
									{dataMovie?.original_title}
								</h2>
								<span className='text-black dark:text-white text-sm'>
									{dataMovie?.release_date.slice(0, 4)}
								</span>

								<div className='flex items-center gap-3 my-3'>
									<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
										PG - {dataMovie?.vote_average}
									</div>
									<div className='gender text-black dark:text-white'>
										{dataMovie?.genres.map((genre) => genre.name)}
									</div>
									<div className='duration-movie text-black dark:text-white'>{dataMovie?.runtime}mins</div>
								</div>
							</div>

							<p className='text-black dark:text-white text-justify'>
								{dataMovie?.overview.slice(0, 150).concat('...')}
							</p>
						</div>
					</div>

					<div className='production-companie w-full'>
						<h5 className='text-black dark:text-white font-medium text-2xl my-4'>Productions Companies</h5>

						{dataMovie?.production_companies.map((companie) => (
							<div
								className='card-companies'
								key={companie.id}>
								<div className='text-black dark:text-white border-4 border-slate-700 hover:border-slate-600 transition-all rounded-lg p-2 m-2 cursor-pointer '>
									{companie.name}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='xl:basis-1/3 px-3'>
					<div className='post-related'>
						<h5 className='text-black dark:text-white text-2xl font-medium my-5'>Post Related to this movie</h5>

						<img
							src={
								!!dataMovie?.backdrop_path
									? `https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`
									: ImageDefault
							}
							alt='Image BackDrop'
							className='w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-all'
							onClick={() => navigate(`/read-more/${dataMovie?.id}`)}
						/>

						<h6 className='text-black dark:text-white text-sm mt-3 block'>News</h6>
						<Link
							to={`/read-more/${dataMovie?.id}`}
							className='text-black dark:text-white font-medium text-xl my-3 block cursor-pointer'>
							The Before Sunrise Experience
						</Link>
					</div>

					<div className='play-trailer w-full'>
						<button className='text-black dark:text-white text-2xl bg-indigo-600 hover:bg-indigo-900 transition-all px-4 py-3 w-full m-2 rounded-2xl'>
							Play Trailer
						</button>
					</div>
					<div className='movie-archive w-full'>
						<button
							className='text-black dark:text-white text-2xl bg-indigo-600 hover:bg-indigo-900 transition-all px-4 py-3 w-full m-2 rounded-2xl'
							onClick={() => navigate(-1)}>
							See All Movie
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
