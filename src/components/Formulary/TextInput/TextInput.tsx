interface Props {
	label: string;
	[x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
	const classInput: string =
		'rounded-xl outline-none px-3 py-2 border-2 border-neutral-500 border-neutral-700 bg-transparent my-2 w-full transition-all text-white';

	return (
		<div className='items-center mb-5'>
			<label
				htmlFor={props.name}
				className='text-white text-base mr-20'>
				{label}
			</label>

			<input
				className={`${classInput} ${
					!!props.isvalid && props.isvalidform === 'true'
						? 'border-2 border-red-800 transition-all'
						: `${classInput}`
				}`}
				id={props.name}
				{...props}
			/>
		</div>
	);
};
