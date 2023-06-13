import './Spinner.css';

interface Props {
	className?: string;
}

export const Spinner = ({ className }: Props) => {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div className='sk-chase'>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
			</div>
		</div>
	);
};

export default Spinner;
