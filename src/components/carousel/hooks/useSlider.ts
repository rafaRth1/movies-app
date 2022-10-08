import { useEffect, useRef } from 'react';

// interface Props {
// 	arrayImages: any[];
// 	pages: number;
// 	points: boolean;
// }

export const useSlider = () => {
	const fila: any = useRef<HTMLDivElement>(null);
	// const amountPages = Math.ceil(arrayImages.length / pages);

	// useEffect(() => {
	// 	for (let i = 0; i < amountPages; i++) {
	// 		const index = document.createElement('button');

	// 		if (i === 0) {
	// 			index.classList.add('active');
	// 		}

	// 		document.querySelector('.index-pages')?.appendChild(index);
	// 		index.addEventListener('click', (e: any) => {
	// 			fila.current.scrollLeft = i * fila.current.offsetWidth;

	// 			document.querySelector('.index-pages .active')?.classList.remove('active');
	// 			e.target.classList.add('active');
	// 		});
	// 	}
	// }, [points]);

	const handleLeft = (ancho: any) => {
		const imageCarousel: any = document.querySelector('.card-slider');
		const widthImageCarousel: any = imageCarousel?.scrollWidth;
		ancho.current.scrollLeft -= widthImageCarousel;
	};

	const handleRight = (ancho: any) => {
		const imageCarousel: any = document.querySelector('.card-slider');
		const widthImageCarousel: any = imageCarousel?.scrollWidth;
		ancho.current.scrollLeft += widthImageCarousel;
	};

	return { fila, handleLeft, handleRight };
};
