import { useSlider } from './hooks/useSlider';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './styles/SliderComponent.css';

interface PropsSlider {
	children: JSX.Element | JSX.Element[];
	subTitle: string;
	rows?: number;
	styles?: {};
	// arrayImages: any[];
	// points: boolean;
	// pages?: number;
}

export const SliderComponent = ({ children, subTitle, styles }: PropsSlider) => {
	const { fila, handleLeft, handleRight } = useSlider();

	return (
		<div className='slider'>
			<h2 className='text-black dark:text-white text-xl font-medium mb-6'>{subTitle}</h2>

			<section
				ref={fila}
				className='slider-container'>
				<div
					className={`slider-content`}
					style={styles}>
					{children}
				</div>
			</section>

			{/* {points ? <div className='index-pages'></div> : null} */}

			<div className='buttons-slider'>
				<button onClick={() => handleLeft(fila)}>
					<IoChevronBackOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
				<button onClick={() => handleRight(fila)}>
					<IoChevronForwardOutline
						className='cursor-pointer text-black dark:text-white'
						size={20}
					/>
				</button>
			</div>
		</div>
	);
};
