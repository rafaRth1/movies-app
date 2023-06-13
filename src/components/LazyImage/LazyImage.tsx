import { CSSProperties, useEffect, useRef, useState } from 'react';
import './LazyImage.css';

interface Props {
	placeholderOverlayClass?: string;
	placeholderOverlayStyle?: CSSProperties;
	placeholderSrc: string;
	placeholderClassName?: string;
	placeholderStyle?: CSSProperties;
	src: string;
	alt?: string;
	className?: string;
	style?: CSSProperties;
	[x: string]: any;
}

export const LazyImage = ({
	placeholderOverlayClass,
	placeholderOverlayStyle,
	placeholderSrc,
	placeholderClassName,
	placeholderStyle,
	src,
	alt,
	className,
	style,
	...props
}: Props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadPlaceholder, setIsLoadPlaceholder] = useState(true);
	const [view, setView] = useState('');
	const placeholderRef = useRef<HTMLImageElement | null>(null);

	const onLoad = () => {
		setIsLoading(false);
	};

	const onLoadPlaceholder = () => {
		setIsLoadPlaceholder(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setView(src);
				observer.unobserve(placeholderRef.current!);
			}
		});

		if (placeholderRef && placeholderRef.current) {
			observer.observe(placeholderRef.current);
		}
	}, []);

	return (
		<>
			{isLoading && (
				<>
					{isLoadPlaceholder && (
						<div
							className={`overlay ${placeholderOverlayClass}`}
							style={{ ...placeholderOverlayStyle }}
						/>
					)}

					<img
						src={`${
							placeholderSrc.includes('null')
								? 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
								: placeholderSrc
						}`}
						alt='Image Placeholder'
						className={placeholderClassName}
						ref={placeholderRef}
						onLoad={onLoadPlaceholder}
						style={{
							...placeholderStyle,
							position: 'absolute',
						}}
					/>
				</>
			)}

			<img
				src={`${
					src.includes('null')
						? 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
						: view
				}`}
				className={className}
				alt={alt}
				onLoad={onLoad}
				style={isLoading ? { display: 'none' } : { ...style }}
				{...props}
			/>
		</>
	);
};
