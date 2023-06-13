import { CSSProperties, useEffect, useReducer, useRef, useState } from 'react';

interface Props {
	src: string;
	className?: string;
	height?: string;
	alt?: string;
	[x: string]: any;
}

export const ImageBox = ({
	placeholderImg,
	placeholderClassName,
	src,
	className,
	height,
	...props
}: Props) => {
	const [loaded, setLoaded] = useState(true);

	const onload = () => {
		setLoaded(false);
	};

	return (
		<div className={`img-box`}>
			<>
				<img
					src={`${placeholderImg}`}
					className={`${className ? className : ''}  ${loaded ? 'blur-2xl' : ''}`}
					onLoad={onload}
					{...props}
				/>

				{loaded ? <div className={`overlay`} /> : null}
			</>
		</div>
	);
};
