import { useAppSelector } from '../../../hooks';
import { PopularReadCard } from './PopularReadCard';

import './PopularRead.css';

export const PopularReads = () => {
	const { moviesUpComing } = useAppSelector((state) => state.movie);

	return (
		<div className='container-popular-read'>
			<div className='p-3 h-full'>
				<h2 className='text-black dark:text-white text-xl font-semibold my-3'>Popular Reads</h2>

				<div className='popular-read'>
					{moviesUpComing.slice(0, 6).map((movie) => (
						<PopularReadCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
