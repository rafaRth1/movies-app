import { IoChevronForwardOutline } from 'react-icons/io5';

export const Arrows = () => {
	return (
		<div className='splide__arrows splide__arrows--ltr text-white'>
			<div className='relative'>
				<button
					className='splide__arrow splide__arrow--prev'
					type='button'
					aria-label='Previous slide'
					aria-controls='splide01-track'>
					<IoChevronForwardOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
				<button
					className='splide__arrow splide__arrow--next'
					type='button'
					aria-label='Next slide'
					aria-controls='splide01-track'>
					<IoChevronForwardOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
			</div>
		</div>
	);
};
