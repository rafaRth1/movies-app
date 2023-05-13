import { useRef, useState } from 'react';

export const useCarousel = () => {
	const [isDrag, setIsDrag] = useState(false);
	const prevScrollLeft = useRef(0);
	const prevPageX = useRef(0);
	const positionDiff = useRef(0);
	const isDragging = useRef(false);
	const fila: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const carousel: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const onMouseMove = (e: any): void => {
		if (!isDrag) return;

		isDragging.current = true;
		carousel.current?.classList.add('dragging');

		positionDiff.current = (e!.pageX || e.touches[0].pageX) - prevPageX.current;
		carousel.current!.scrollLeft = prevScrollLeft.current - positionDiff.current;
	};

	// e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>

	const onMouseDown = (e: any): void => {
		setIsDrag(true);

		prevPageX.current = e.pageX || e.touches[0].pageX;
		prevScrollLeft.current = carousel.current!.scrollLeft;
	};

	const onMouseUp = (): void => {
		setIsDrag(false);
		carousel.current?.classList.remove('dragging');

		if (!isDragging) return;
		isDragging.current = false;
		handleAutoSlide();
	};

	const handleAutoSlide = () => {
		if (!isDrag) return;

		if (carousel.current?.scrollLeft === carousel.current!.scrollWidth - carousel.current!.clientWidth)
			return;

		positionDiff.current = Math.abs(positionDiff.current);
		let cardWidth = carousel.current!.firstElementChild!.clientWidth;
		let valDifference = cardWidth - positionDiff.current;
		if (carousel.current!.scrollLeft > prevScrollLeft.current) {
			return (carousel.current!.scrollLeft +=
				positionDiff.current > cardWidth / 3 ? valDifference : -positionDiff.current);
		}

		carousel.current!.scrollLeft -=
			positionDiff.current > cardWidth / 3 ? valDifference : -positionDiff.current;
	};

	const handleLeft = (cardCarouselWidth: Element | null | undefined) => {
		carousel.current!.scrollLeft -= cardCarouselWidth!.clientWidth;
	};

	const handleRight = (cardCarouselWidth: Element | null | undefined) => {
		carousel.current!.scrollLeft += cardCarouselWidth!.clientWidth;
	};

	return {
		fila,
		carousel,
		handleLeft,
		handleRight,
		onMouseMove,
		onMouseDown,
		onMouseUp,
	};
};
