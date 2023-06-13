import { CSSProperties } from 'react';
import { useCarousel } from '../../hooks';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import './Carousel.css';

interface PropsSlider {
	children: JSX.Element | JSX.Element[];
	subTitle: string;
	rows?: number;
	styles?: CSSProperties;
}

export const Carousel = ({ children, subTitle, styles }: PropsSlider) => {
	const { carousel, handleLeft, handleRight, onMouseMove, onMouseDown, onMouseUp } = useCarousel();

	return (
		<div className='slider -mx-3'>
			<h2 className='text-black dark:text-white text-xl font-bold mb-6 px-3'>{subTitle}</h2>

			<section className='slider-container'>
				<div
					ref={carousel}
					className='slider-content'
					onMouseMove={onMouseMove}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
					onMouseLeave={onMouseUp}
					onTouchMove={onMouseMove}
					onTouchStart={onMouseDown}
					onTouchEnd={onMouseUp}
					style={styles}>
					{children}
				</div>
			</section>

			<div className='buttons-slider'>
				<button
					id='arrow-left'
					onClick={() => handleLeft(carousel.current?.firstElementChild)}>
					<IoChevronBackOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
				<button
					id='arrow-right'
					onClick={() => handleRight(carousel.current?.firstElementChild)}>
					<IoChevronForwardOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
