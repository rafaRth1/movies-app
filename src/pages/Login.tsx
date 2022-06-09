import Header from '../views/Header';
import Input from '../components/Formulary/Input';
import Footer from '../views/Footer';

const Login = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      console.log('a');
   };

   return (
      <div className='relative h-full'>
         <div className='content-header-full sticky h-20 w-full z-50'>
            <Header />
         </div>

         <div className='login'>
            <div className='flex flex-col-reverse md:flex-row'>
               <div className='formulary md:basis-1/2 lg:basis-2/5'>
                  <div className='m-8'>
                     <h2 className='text-white text-3xl font-medium mb-8'>Login</h2>

                     <form onSubmit={(e) => handleSubmit(e)}>
                        <Input htmlFor={'username'} label={'Username o Email'} type={'text'} />
                        <Input htmlFor={'password'} label={'Password'} type={'password'} />

                        <input
                           type='submit'
                           className='w-full bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10'
                        />

                        <p className='text-white text-sm text-left'>Register | Lost Password</p>
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

         <footer className='content-footer w-full'>
            <Footer />
         </footer>
      </div>
   );
};

export default Login;
