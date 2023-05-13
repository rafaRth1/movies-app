import { MovieReadMoreId } from '../../../../store/movies/interfaces';

interface Props {
	movieReadMoreId: MovieReadMoreId;
}

export const BodyReadMore = ({ movieReadMoreId }: Props) => {
	console.log();

	return (
		<div className='text-black dark:text-white text-justify mt-10'>
			<p className='mb-5 text-lg'>{movieReadMoreId?.overview}</p>

			<div className='release-date my-5 text-xs'>{movieReadMoreId?.release_date}</div>

			<h4 className='font-medium'>In this post:</h4>

			<p className='flex flex-col'>
				<span className='text-2xl font-["rubik"] py-3'>Leave a Reply</span>
				<span className='text-ms'>
					Your Email address will not be published. Required fields are marked *
				</span>
			</p>
		</div>
	);
};
