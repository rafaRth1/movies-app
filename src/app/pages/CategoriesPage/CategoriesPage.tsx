import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchAllCategories } from '@/store';
import { LazyImage, Spinner } from '@/components';

import './CategoriesPage.css';

export const CategoriesPage = () => {
	const dispatch = useAppDispatch();
	const { arrayAllCategories, loading } = useAppSelector((state) => state.movie);

	useEffect(() => {
		dispatch(fetchAllCategories());
	}, []);

	return (
		<div className='contanier-page-categories p-4'>
			<h1 className='text-white block m-3 text-3xl font-semibold'>All Categories</h1>

			{loading ? (
				<Spinner className='h-40' />
			) : (
				<div className='content-categories'>
					{arrayAllCategories.map((categories) => (
						<div
							key={categories.provider_id}
							className='card-categories text-white p-2'>
							<div className='card-categories-img relative'>
								<LazyImage
									placeholderSrc={`https://image.tmdb.org/t/p/original_filter(blur)${categories.logo_path}`}
									src={`https://image.tmdb.org/t/p/original${categories.logo_path}`}
									className='w-full cursor-pointer transition-all hover:opacity-80'
									alt='Image Category'
								/>
							</div>

							<div className='px-2 flex-1'>
								<h5 className='text-white font-medium text-lg hover:text-indigo-700 dark:hover:text-indigo-700 cursor-pointer'>
									{/* <Link to={`/movie-information/${movies.id}`}>{movies.title}</Link> */}
									<span className='text-base break-words'>{categories.provider_name}</span>
								</h5>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CategoriesPage;
