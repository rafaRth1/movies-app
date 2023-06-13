import { useEffect, useRef, useState } from 'react';

export const useObserver = () => {
	const [isShow, setIsShow] = useState(false);
	const elementCard = useRef(null);

	const callbackObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		if (entries[0].isIntersecting) {
			setIsShow(true);
			observer.disconnect();
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callbackObserver, {
			rootMargin: '0px',
			threshold: 0.9,
		});
		if (elementCard.current) observer.observe(elementCard.current!);

		return () => {
			if (elementCard.current) observer.unobserve(elementCard.current!);
		};
	}, [elementCard]);

	return { isShow, elementCard };
};
