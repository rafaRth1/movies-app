import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import ImageDefault from '../../../../../assets/ImageDefault_1280x720.png';

import './BodyMovieInformation.css';

export const BodyMovieInformation = () => {
	const navigate = useNavigate();
	const { movieInformation, loading } = useAppSelector((state) => state.movie);

	return (
		<div className='movie-information px-3'>
			<div className='movie-information-wrapper p-4'>
				<div className='movie-information-main px-3'>
					<div className='overview-wrapper'>
						<div className='overview-information-mobile mb-3'>
							<h2 className='text-black dark:text-white text-4xl font-semibold inline-block mr-3'>
								{movieInformation?.original_title}
							</h2>

							<span className='text-black dark:text-white text-sm inline'>
								{!!movieInformation?.release_date && movieInformation?.release_date.slice(0, 4)}
							</span>

							<div className='my-3'>
								<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
									PG - {movieInformation?.vote_average}
								</div>

								<div className='duration-movie text-black dark:text-white px-2 py-1 inline'>
									{movieInformation?.runtime}mins
								</div>
							</div>

							<div className='gender flex'>
								{movieInformation.genres?.map((genre) => (
									<a
										key={genre.id}
										href='#'
										className='p-1 text-blue-500 hover:text-indigo-700 cursor-pointer'>
										{genre.name}
									</a>
								))}
							</div>
						</div>

						<div className='overview'>
							<picture className='px-3'>
								{loading ? (
									<Spinner />
								) : (
									<img
										src={`https://image.tmdb.org/t/p/original${movieInformation?.poster_path}`}
										alt='Image Poster'
										className='rounded-2xl'
									/>
								)}
							</picture>

							<div className='overview-information px-3'>
								<div className='title-general mb-3'>
									<h2 className='text-black dark:text-white text-4xl font-semibold inline mr-3'>
										{movieInformation?.original_title}
									</h2>

									<span className='text-black dark:text-white text-sm'>
										{movieInformation.release_date?.slice(0, 4)}
									</span>

									<div className='my-3'>
										<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
											PG - {movieInformation?.vote_average}
										</div>

										<div className='duration-movie text-black dark:text-white px-2 py-1 inline'>
											{movieInformation?.runtime}mins
										</div>
									</div>

									<div className='gender flex'>
										{movieInformation.genres?.map((genre) => (
											<a
												key={genre.id}
												href='#'
												className='p-1 text-blue-500 hover:text-indigo-700 cursor-pointer'>
												{genre.name}
											</a>
										))}
									</div>
								</div>

								<p className='text-black dark:text-white text-justify text-lg'>
									{movieInformation?.overview}
								</p>
							</div>
						</div>
					</div>

					<div className='production-companie w-full'>
						<h5 className='text-black dark:text-white font-semibold text-2xl my-4'>
							Productions Companies
						</h5>

						{movieInformation.production_companies?.map((companie) => (
							<div
								className='card-companies items-center p-2'
								key={companie.id}>
								<picture>
									<img
										src={
											!!companie.logo_path
												? `https://image.tmdb.org/t/p/w500${companie.logo_path}`
												: `https://img.freepik.com/vector-premium/ilustracion-personaje-misterioso-mafia_23-2148460671.jpg?w=740`
										}
										alt='Logo Companie'
									/>
								</picture>

								<span className='text-black dark:text-white ml-4 flex-1'>{companie.name}</span>
							</div>
						))}
					</div>
				</div>

				<div className='movie-information-aside px-3'>
					<div className='play-trailer w-full'>
						<button className='text-black dark:text-white text-xl bg-indigo-800 hover:bg-indigo-900 transition-all px-4 py-3 w-full my-2 rounded-2xl'>
							Play Trailer
						</button>

						<button
							className='text-black dark:text-white text-xl bg-indigo-800 hover:bg-indigo-900 transition-all px-4 py-3 w-full my-2 rounded-2xl'
							onClick={() => navigate(-1)}>
							See All Movie
						</button>
					</div>

					<div className='post-related'>
						<h5 className='text-black dark:text-white text-xl font-semibold my-5'>
							Post Related to this movie
						</h5>

						<div className='post-related-link'>
							<picture className='mr-4'>
								<img
									src={
										!!movieInformation?.backdrop_path
											? `https://image.tmdb.org/t/p/w780${movieInformation?.backdrop_path}`
											: ImageDefault
									}
									alt='Image BackDrop'
									className='w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-all'
									onClick={() => navigate(`/read-more/${movieInformation?.id}`)}
								/>
							</picture>

							<div className='flex-1'>
								<h6 className='text-black dark:text-white text-sm mt-3 block'>News</h6>
								<Link
									to={`/read-more/${movieInformation?.id}`}
									className='text-black dark:text-white font-medium text-xl my-3 block cursor-pointer'>
									The Before Sunrise Experience
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
