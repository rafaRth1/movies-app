import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Formulary/TextInput/TextInput';
import Message from '../components/Message';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useRedux';
import { activeNavigation } from '../redux/slice';
import Header from '../views/Header';

const Register = () => {
   const [firstName, setFirstName] = useState({ value: '', hasError: null });
   const [lastName, setLastName] = useState({ value: '', hasError: null });
   const [username, setUsername] = useState({ value: '', hasError: null });
   const [email, setEmail] = useState({ value: '', hasError: null });
   const [password, setPassword] = useState({ value: '', hasError: null });
   const [confirmPassword, setConfirmPassword] = useState({ value: '', hasError: null });
   const [validate, setValidate] = useState(false);
   const [msg, setMsg] = useState({ message: '', hasError: false });

   const expresiones = {
      firstName: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      lastName: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      username: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password: /^.{4,12}$/, // 4 a 12 digitos.
      confirmPassword: /^.{4,12}$/,
      telefono: /^\d{7,14}$/, // 7 a 14 numeros.
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const url = 'http://localhost:4000/users';

      if (validate === true) {
         axios
            .post(url, {
               firstName: firstName.value,
               lastName: lastName.value,
               username: username.value,
               email: email.value,
               password: password.value,
            })
            .then((response) => {
               console.log(response);
               setMsg({
                  message: 'Todo okey',
                  hasError: false,
               });
               <Navigate to='/' />;
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         setMsg({
            message: 'Completar los campos faltantes',
            hasError: true,
         });
      }
   };

   const { message } = msg;

   return (
      <>
         <div className='content-register h-full'>
            <div className='register h-full flex flex-col md:flex-row'>
               <div className='register-img md:w-1/2 lg:w-4/6'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/steve-johnson-G-zsrSWvKmc-unsplash.jpg'
                     alt='Login Image'
                     className='object-cover h-full'
                  />
               </div>

               <div className='formulary flex justify-center items-center inputs px-4 md:w-1/2 lg:w-2/6'>
                  <div className='m-8'>
                     <h2 className='text-black dark:text-white text-3xl font-medium my-10'>Registration</h2>

                     <form onSubmit={(e) => handleSubmit(e)}>
                        <Input
                           state={firstName}
                           setstate={setFirstName}
                           name={'firstName'}
                           label={'First Name'}
                           type={'text'}
                           regularphrase={expresiones.firstName}
                           setvalidate={setValidate}
                        />
                        <Input
                           state={lastName}
                           setstate={setLastName}
                           name={'lastName'}
                           label={'Last Name'}
                           type={'text'}
                           regularphrase={expresiones.lastName}
                           setvalidate={setValidate}
                        />
                        <Input
                           state={username}
                           setstate={setUsername}
                           name={'username'}
                           label={'Username'}
                           type={'text'}
                           regularphrase={expresiones.username}
                           setvalidate={setValidate}
                        />
                        <Input
                           state={email}
                           setstate={setEmail}
                           name={'email'}
                           label={'Email'}
                           type={'email'}
                           regularphrase={expresiones.email}
                           setvalidate={setValidate}
                        />
                        <Input
                           state={password}
                           setstate={setPassword}
                           name={'password'}
                           label={'Password'}
                           type={'password'}
                           regularphrase={expresiones.password}
                           setvalidate={setValidate}
                        />
                        <Input
                           state={confirmPassword}
                           setstate={setConfirmPassword}
                           name={'confirmPassword'}
                           label={'Confirm Password'}
                           type={'password'}
                           regularphrase={expresiones.confirmPassword}
                           setvalidate={setValidate}
                        />

                        {message && <Message type={msg.hasError}>{message}</Message>}

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
                        className='w-1/2 bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10 cursor-pointer block text-center'
                     >
                        Go Movies
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Register;
