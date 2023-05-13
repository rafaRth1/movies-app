interface Props {
	label: string;
	[x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
	const classInput: string =
		'rounded-3xl outline-none px-3 py-2 border-2 border-neutral-500 dark:border-neutral-700 bg-transparent my-2 w-full transition-all text-black dark:text-white';

	return (
		<div className='items-center mb-5'>
			<label
				htmlFor={props.name}
				className='text-black dark:text-white text-base mr-20 font-["rubik"]'>
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
