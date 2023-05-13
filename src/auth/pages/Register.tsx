import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { TextInput } from '../../components';
import movieAppApi from '../../api/movieAppApi';

const formData = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const formValidations = {
	firstName: [(value: string) => value.length >= 2, 'El first NAme debe tener un @.'],
	lastName: [(value: string) => value.length >= 2, 'El correo debe tener un @.'],
	username: [(value: string) => value.length >= 2, 'El correo debe tener un @.'],
	email: [(value: string) => value.includes('@'), 'El correo debe tener un @.'],
	password: [(value: string) => value.length >= 6, 'El password debe tener mas de 6 caracteres.'],
	confirmPassword: [(value: string) => value.length >= 1, 'El nombre es obligatorio.'],
};

export const Register = () => {
	const { formState, formValidation, onInputChange } = useForm(formData, formValidations);
	const [formSubmitted, setFormSubmitted] = useState(false);

	// console.log(firstNameValid);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(!formSubmitted);

		try {
			if (!Object.values(formState).includes('') && formData.password === formData.confirmPassword) {
				const { data } = await movieAppApi.post(`${import.meta.env.VITE_API_URL}/auth/new-user`, {
					firstname: formState.firstName,
					lastname: formState.lastName,
					username: formState.username,
					email: formState.email,
					password: formState.password,
				});

				console.log(data);
			} else {
				console.log('Falta Completar');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='content-register'>
			<div className='register h-full flex justify-center items-center flex-col md:flex-row'>
				<div className='formulary flex justify-center items-center inputs px-4 md:w-1/2 lg:w-2/6'>
					<div className='m-8'>
						<h2 className='text-black dark:text-white text-center text-3xl font-medium my-10'>
							Registration
						</h2>

						<form onSubmit={(e) => handleSubmit(e)}>
							<TextInput
								type={'text'}
								label={'First Name'}
								name={'firstName'}
								value={formState.firstName}
								onChange={onInputChange}
								isvalid={formValidation.firstNameValid}
								isvalidform={formSubmitted.toString()}
							/>

							<TextInput
								type={'text'}
								label={'Last Name'}
								name={'lastName'}
								value={formState.lastName}
								onChange={onInputChange}
								isvalid={formValidation.lastNameValid}
								isvalidform={formSubmitted.toString()}
							/>

							<TextInput
								type={'text'}
								label={'Username'}
								name={'username'}
								value={formState.username}
								onChange={onInputChange}
								isvalid={formValidation.usernameValid}
								isvalidform={formSubmitted.toString()}
							/>

							<TextInput
								type={'text'}
								label={'Email'}
								name={'email'}
								value={formState.email}
								onChange={onInputChange}
								isvalid={formValidation.emailValid}
								isvalidform={formSubmitted.toString()}
							/>

							<TextInput
								type={'password'}
								label={'Password'}
								name={'password'}
								value={formState.password}
								onChange={onInputChange}
								isvalid={formValidation.passwordValid}
								isvalidform={formSubmitted.toString()}
							/>

							<TextInput
								type={'password'}
								label={'Confirm Password'}
								name={'confirmPassword'}
								value={formState.confirmPassword}
								onChange={onInputChange}
								isvalid={formValidation.confirmPasswordValid}
								isvalidform={formSubmitted.toString()}
							/>

							<input
								type='submit'
								className='w-full bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10 cursor-pointer'
							/>
						</form>

						<p className='text-black dark:text-white text-sm text-center'>
							<Link to={'/login'}> Login </Link> | Lost Password
						</p>

						<Link
							to={'/'}
							className=' bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10 cursor-pointer block text-center '>
							Go Movies
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
