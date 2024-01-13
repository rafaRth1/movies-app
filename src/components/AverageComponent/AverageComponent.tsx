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
			return { 0: '#22c55e', 1: '#22c55e' };
		} else if (value >= 40 && value <= 69) {
			return { 0: '#eab308', 1: '#f7ce00' };
		} else {
			return { 0: '#ef4444', 1: '#dc2626' };
		}
	};

	return (
		<div className='absolute bottom-2 right-2'>
			<svg
				viewBox='0 0 36 36'
				className='circular-chart w-[50px] h-[50px]'>
				<path
					className='circle'
					stroke={typeColorAverage()[0]}
					fill='black'
					fillOpacity={0.6}
					strokeWidth={2.8}
					strokeLinecap='round'
					strokeDasharray={`${value}, 100`}
					d='M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831'
				/>
			</svg>
			<span className='font-semibold text-sm text-white absolute bottom-[15px] right-[11px]'>
				{value.toString().slice(0, 2)}%
			</span>
		</div>
	);
};
