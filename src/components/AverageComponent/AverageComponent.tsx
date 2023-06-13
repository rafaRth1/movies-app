import { CSSProperties } from 'react';
import './AverageComponent.css';

interface Props {
	average: number;
	styles?: CSSProperties;
}

export const AverageComponent = ({ average, styles }: Props) => {
	const value = average * 10;

	const typeColorAverage = (): { 0: string; 1: string } => {
		if (value >= 70 && value <= 100) {
			return { 0: '#14532d', 1: '#22c55e' };
		} else if (value >= 40 && value <= 69) {
			return { 0: '#808214', 1: '#f7ce00' };
		} else {
			return { 0: '#991b1b', 1: '#dc2626' };
		}
	};

	return (
		<div
			className={`progress-circle over50 p${value}`}
			style={{ ...styles, backgroundColor: `${typeColorAverage()[0]}` }}>
			<span className='font-semibold'>{value}%</span>
			<div className='left-half-clipper'>
				<figure
					className='first50-bar'
					style={{
						backgroundColor: `${value === 0 ? 'transparent' : `${typeColorAverage()[1]}`}`,
					}}></figure>
				<figure
					className='value-bar'
					style={{ backgroundColor: `${typeColorAverage()[1]}` }}></figure>
			</div>
		</div>
	);
};
