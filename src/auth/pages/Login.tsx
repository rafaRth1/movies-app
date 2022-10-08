import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { TextInput } from '../../components/formulary/TextInput/TextInput';
import movieAppApi from '../../api/movieAppApi';

const formData = {
	username: '',
	password: '',
};

const formValidations = {
	username: [(value: string) => value.length >= 2, 'El correo debe tener un @.'],
	password: [(value: any) => value.length >= 6, 'El password debe tener mas de 6 caracteres.'],
};

export const Login = () => {
	const { formState, formValidation, onInputChange } = useForm(formData, formValidations);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(!formSubmitted);

		try {
			if (!Object.values(formState).includes('')) {
				const { data } = await movieAppApi.post('https://movies-app-backend-rafarth1.herokuapp.com/api', {
					username: formState.username,
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
		<div className='relative h-full'>
			<div className='login h-full'>
				<div className='flex justify-center flex-col-reverse md:flex-row h-full'>
					<div className='formulary md:basis-1/2 lg:basis-2/5 flex items-center justify-center'>
						<div className='m-8'>
							<h2 className='text-black dark:text-white text-3xl font-medium mb-8 text-center'>
								Login
							</h2>
							<form onSubmit={(e) => handleSubmit(e)}>
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
									type={'password'}
									label={'Password'}
									name={'password'}
									value={formState.password}
									onChange={onInputChange}
									isvalid={formValidation.passwordValid}
									isvalidform={formSubmitted.toString()}
								/>

								<button
									type='submit'
									className='w-full bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10'>
									Enviar
								</button>

								<p className='text-black dark:text-white text-sm text-center'>
									<Link to={'/register'}> Register </Link> | Lost Password
								</p>

								<Link
									to={'/'}
									className='bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10 cursor-pointer block text-center'>
									Go Movies
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
