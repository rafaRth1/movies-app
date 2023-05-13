import { useState } from 'react';
import { useForm } from '../../../../hooks';
import { Message, TextInput } from '../../../../components';

const formData = {
	name: '',
	email: '',
	website: '',
	comment: '',
};

const formValidations = {
	name: [(value: string) => value.length >= 2, 'El correo debe tener un @.'],
	email: [(value: string) => value.includes('@'), 'El password debe tener mas de 6 caracteres.'],
	website: [(value: string) => value.length <= 0, 'El website debe tener mas de 6 caracteres.'],
	comment: [(value: string) => value.length <= 0, 'El website debe tener mas de 6 caracteres.'],
};

export const FormReadMore = () => {
	const { formState, formValidation, onInputChange } = useForm(formData, formValidations);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [msg, setMsg] = useState({ message: '', hasError: false });

	const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		e.preventDefault();

		console.log(formState);
	};

	const { message } = msg;

	return (
		<form>
			<div className='flex gap-3 my-3'>
				<div className='basis-1/2'>
					<TextInput
						type='text'
						label='Name'
						name='name'
						value={formState.name}
						onChange={onInputChange}
						isvalid={formValidation.nameValid}
						isvalidform={formSubmitted.toString()}
					/>
				</div>

				<div className='basis-1/2'>
					<TextInput
						type='email'
						label='Email'
						name='email'
						value={formState.email}
						onChange={onInputChange}
						isvalid={formValidation.emailValid}
						isvalidform={formSubmitted.toString()}
					/>
				</div>
			</div>

			<div className='my-3'>
				<TextInput
					type='text'
					label='Website'
					name='website'
					value={formState.website}
					onChange={onInputChange}
					isvalid={formValidation.websiteValid}
					isvalidform={formSubmitted.toString()}
				/>
			</div>

			<div className='w-full flex flex-col my-3'>
				<label
					htmlFor='website'
					className='text-black dark:text-white font-["rubik"] mb-2'>
					Comment *
				</label>
				<textarea
					name='comment'
					id='comment'
					className='w-full border-2 border-neutral-500 dark:border-neutral-700 bg-transparent px-2 py-1 rounded-2xl h-auto text-black dark:text-white transition-all'
					value={formState.comment}
					onChange={onInputChange}></textarea>
			</div>

			{message && <Message type={msg.hasError}>{message}</Message>}

			<input
				type='submit'
				value='Post Comment'
				className='text-black dark:text-white text-xl bg-indigo-800 w-full rounded-2xl my-3 p-2 cursor-pointer transition-all font-["rubik"]'
				onClick={(e) => handleSubmit(e)}
			/>
		</form>
	);
};
