import { CSSProperties, useState } from 'react';

interface Props {
	placeholderSrc: string;
	src: string;
	className?: string;
	style?: CSSProperties;
	alt?: string;
}

export const ImageLoad = ({ src, placeholderSrc, className, style, alt }: Props) => {
	const [load, setLoad] = useState(true);

	const onLoad = () => {
		setLoad(false);
	};

	return (
		<div>
			<img
				src={`${load ? placeholderSrc : src}`}
				className={className}
				style={style}
				alt={alt}
				onLoad={onLoad}
			/>
		</div>
	);
};
