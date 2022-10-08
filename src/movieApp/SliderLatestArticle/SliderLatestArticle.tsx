import { SliderComponent } from '../../components/carousel';
import { useAppSelector } from '../../hooks';
import { PanelsLatestArticle } from './components/PanelsLatestArticle';

import './sliderLatestArticle.css';

export const SliderLatestArticle = () => {
	const moviesUpComing = useAppSelector((state) => state.movie.moviesUpComing);
	const selectFirstImagePanel: any[] = moviesUpComing.slice(1, 4);
	const selectTwoImagePanel: any[] = moviesUpComing.slice(4, 10);

	return (
		<div className='container-slide-article p-3'>
			<SliderComponent subTitle='Latest Article'>
				<PanelsLatestArticle
					selectFirstImagePanel={selectFirstImagePanel}
					selectTwoImagePanel={selectTwoImagePanel}
				/>
			</SliderComponent>
		</div>
	);
};
