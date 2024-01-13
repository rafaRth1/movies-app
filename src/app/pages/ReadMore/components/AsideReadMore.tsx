import { MovieReadMoreId } from '@/store/movies/interfaces/';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';

interface Props {
	movieReadMoreId: MovieReadMoreId;
}

export const AsideReadMore = ({ movieReadMoreId }: Props) => {
	return (
		<aside>
			<div className='p-5 sticky top-24'>
				<span className='flex items-center text-white text-xs uppercase mb-5'>
					<IoArrowRedoCircleOutline className='mr-1' />
					Celluloid
				</span>
				<h1 className='text-white text-4xl uppercase mb-5'>{movieReadMoreId?.title}</h1>
				<span className='block text-white text-xl font-medium  uppercase mb-5'>
					{movieReadMoreId?.tagline}
				</span>

				<div className='production-companies'>
					<h3 className='text-white font-bold'>Production Companies</h3>
					{!!movieReadMoreId.production_companies &&
						movieReadMoreId!.production_companies.map((production) => (
							<div
								key={production.id}
								className='production-companies-wrapper my-4 w-full'>
								<img
									src={
										!!production?.logo_path
											? `https://image.tmdb.org/t/p/w500/${production?.logo_path}`
											: `https://img.freepik.com/vector-premium/ilustracion-personaje-misterioso-mafia_23-2148460671.jpg?w=740`
									}
									alt='Production Companie'
									className='rounded-full w-10 mr-3 inline-block'
								/>

								<span className='font-medium text-white cursor-pointer transition-colors hover:text-indigo-700 dark:hover:text-indigo-700'>
									{production?.name}
								</span>
							</div>
						))}
				</div>
			</div>
		</aside>
	);
};
