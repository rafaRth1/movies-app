import { SplideSlide } from '@splidejs/react-splide';
import { Categories } from './data/arrayCategories';
import { useObserver } from '../../../hooks';
import { ImageBox } from '../../ImageBox/ImageBox';

interface Props {
	category: Categories;
}

export const SliderFeatureCategoryCard = ({ category }: Props) => {
	// const { isShow, elementCard } = useObserver();

	return (
		<SplideSlide
			key={category.name}
			className='card-category-wrapper'>
			<figure className='card-category-image h-full cursor-grab'>
				{/* {isShow ? ( */}
				<ImageBox
					data-img={category.img}
					alt='Image Category'
				/>
				{/* ) : null} */}
			</figure>

			<div className='name-category'>
				<h5 className='text-white font-bold text-xl'>{category.name}</h5>
			</div>
		</SplideSlide>
	);
};
