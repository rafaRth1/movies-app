export const TextInput = ({ label, ...props }: any) => {
	const classInput =
		'rounded-3xl  outline-none px-3 py-2  bg-neutral-300 dark:bg-neutral-700 text-gray-500 my-2 w-full transition-all';

	return (
		<div className='items-center mb-5'>
			<label
				htmlFor={props.name}
				className='text-black dark:text-white text-sm mr-20 w-2/6'>
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
