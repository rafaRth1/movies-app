import { arrayCategories } from './data/arrayCategories';
import { SliderComponent } from '../../components/carousel';

import './sliderFeatureCategory.css';

export const SliderFeatureCategory = () => {
	return (
		<div className='container-slider-categories p-3'>
			<SliderComponent subTitle='Featured Categories'>
				{arrayCategories.map((category) => (
					<div
						className='card-category cursor-pointer'
						key={category.name}>
						<img
							src={category.img}
							alt='Image Category'
						/>
						<div className='name-category'>
							<h5 className='text-white font-medium text-lg'>{category.name}</h5>
						</div>
					</div>
				))}
			</SliderComponent>
		</div>
	);
};
