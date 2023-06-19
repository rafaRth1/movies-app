import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageLoad, LazyImage } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';

import './BodyMovieInformation.css';
import { ModalVideo } from '../../../../../components/ModalVideo/ModalVideo';

export const BodyMovieInformation = () => {
	const [showModal, setShowModal] = useState(false);
	const { movieInformation, arrayMovieVideos, arrayMoviesRecommend } = useAppSelector(
		(state) => state.movie
	);
	const navigate = useNavigate();

	const filterVideoTrailer = arrayMovieVideos.filter((video) => video.type === 'Trailer');

	return (
		<div className='body-movie-information px-3'>
			<div className='movie-information-wrapper p-4'>
				<section className='px-3'>
					<div className='descrition-movie'>
						<div className='overview-information-mobile mb-3'>
							<h2 className='text-black dark:text-white text-4xl font-semibold inline-block mr-3'>
								{movieInformation.original_title}
							</h2>

							<span className='text-black dark:text-white text-sm inline'>
								{movieInformation.release_date.slice(0, 4)}
							</span>

							<div className='my-3'>
								<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
									PG - {movieInformation.vote_average}
								</div>

								<div className='duration-movie text-black dark:text-white px-2 py-1 inline'>
									{movieInformation.runtime} min
								</div>
							</div>

							<div className='gender flex'>
								{movieInformation.genres.map((genre) => (
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
							<div className='overview-img px-3 relative'>
								<ImageLoad
									placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movieInformation?.poster_path}`}
									src={`https://image.tmdb.org/t/p/w500${movieInformation?.poster_path}`}
									className='rounded-2xl'
									alt='Image Poster'
								/>
							</div>

							<div className='overview-information px-3'>
								<div className='title-general mb-3'>
									<h2 className='text-black dark:text-white text-4xl font-semibold inline mr-3'>
										{movieInformation.original_title}
									</h2>

									<span className='text-black dark:text-white text-sm'>
										{movieInformation.release_date.slice(0, 4)}
									</span>

									<div className='my-3'>
										<div className='vote-average text-black dark:text-white border-4 inline-block px-2 py-1 rounded-xl'>
											PG - {movieInformation.vote_average}
										</div>

										<div className='duration-movie text-black dark:text-white px-2 py-1 inline'>
											{movieInformation.runtime} min
										</div>
									</div>

									<div className='gender flex'>
										{movieInformation.genres.map((genre) => (
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
									{movieInformation.overview}
								</p>
							</div>
						</div>
					</div>

					<div className='production-companie w-full'>
						<h5 className='text-black dark:text-white font-semibold text-2xl my-4'>
							Productions Companies
						</h5>

						<div className='production-companie-wrapper'>
							{movieInformation.production_companies.map((companie) => (
								<div
									className='card-companies items-center p-2'
									key={companie.id}>
									<div className='img-companie'>
										<img
											src={
												!!companie.logo_path
													? `https://image.tmdb.org/t/p/w154${companie.logo_path}`
													: `https://img.freepik.com/vector-premium/ilustracion-personaje-misterioso-mafia_23-2148460671.jpg?w=160`
											}
											alt='Logo Companie'
											className='rounded-lg cursor-pointer'
										/>
									</div>

									<span className='text-black dark:text-white dark:hover:text-indigo-700 ml-4 flex-1 cursor-pointer'>
										{companie.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<aside className='px-3'>
					<div className='play-trailer w-full'>
						<button
							className='text-white text-xl bg-indigo-800 hover:bg-indigo-900 transition-all px-4 py-3 w-full my-2 rounded-2xl'
							onClick={() => setShowModal(true)}>
							Play Trailer
						</button>

						<button
							className='text-white text-xl bg-indigo-800 hover:bg-indigo-900 transition-all px-4 py-3 w-full my-2 rounded-2xl'
							onClick={() => navigate(-1)}>
							See All Movie
						</button>
					</div>
				</aside>
			</div>

			{arrayMoviesRecommend.length === 0 ? null : (
				<div className='movie-recommend'>
					<h5 className='text-black dark:text-white text-xl font-semibold my-5'>
						Post Related to this movie
					</h5>

					<ul className='movie-recommend-content flex flex-wrap'>
						{arrayMoviesRecommend.slice(0, 6).map((movies) => (
							<li
								key={movies.id}
								className='flex flex-col px-2'>
								<div className='img-movie-recommend relative h-full'>
									<LazyImage
										placeholderSrc={`https://image.tmdb.org/t/p/w500_filter(blur)${movies?.poster_path}`}
										placeholderStyle={{ borderRadius: '10px', height: '100%' }}
										src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
										className='w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-all'
										alt='Image BackDrop'
										onClick={() => navigate(`/read-more/${movies?.id}`)}
									/>
								</div>

								<div className='flex-1'>
									<Link
										to={`/read-more/${movieInformation.id}`}
										className='text-black dark:text-white font-medium text-xl my-3 block cursor-pointer'>
										The Before Sunrise Experience
									</Link>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* <ModalVideo
				showModal={showModal}
				setShowModal={setShowModal}
			/> */}
		</div>
	);
};
