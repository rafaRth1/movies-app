import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Formulary/TextInput/TextInput';
import Message from '../components/Message';

const Login = () => {
   const [username, setUsername] = useState({ value: '', hasError: null });
   const [password, setPassword] = useState({ value: '', hasError: null });
   const [validate, setValidate] = useState(false);
   const [msg, setMsg] = useState({ message: '', hasError: false });

   const expresiones = {
      username: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      password: /^.{4,12}$/, // 4 a 12 digitos.
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validate === true) {
         console.log('Okey');
         setMsg({
            message: 'Iniciando Sesión',
            hasError: false,
         });
      } else {
         console.log('Falta completar');
         setMsg({
            message: 'Falta Completar',
            hasError: true,
         });
      }
   };

   const { message } = msg;

   return (
      <div className='relative h-full'>
         <div className='login h-full'>
            <div className='flex flex-col-reverse md:flex-row h-full'>
               <div className='formulary md:basis-1/2 lg:basis-2/5 flex items-center justify-center'>
                  <div className='m-8'>
                     <h2 className='text-black dark:text-white text-3xl font-medium mb-8'>Login</h2>
                     <form onSubmit={(e) => handleSubmit(e)}>
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
                           state={password}
                           setstate={setPassword}
                           name={'password'}
                           label={'Password'}
                           type={'password'}
                           regularphrase={expresiones.password}
                           setvalidate={setValidate}
                        />

                        {message && <Message type={msg.hasError}>{message}</Message>}

                        <input
                           type='submit'
                           className='w-full bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10'
                        />
                        <p className='text-black dark:text-white text-sm text-center'>
                           <Link to={'/register'}> Register </Link> | Lost Password
                        </p>

                        <Link
                           to={'/'}
                           className='w-1/2 bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10 cursor-pointer block text-center'
                        >
                           Go Movies
                        </Link>
                     </form>
                  </div>
               </div>
               <div className='login-img md:basis-1/2 lg:basis-3/5'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/romain-mathon-_0I4rH8XtgM-unsplash.jpg'
                     alt='Login Image'
                     className='h-full w-full object-cover'
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
