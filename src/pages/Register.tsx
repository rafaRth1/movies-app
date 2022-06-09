import Input from '../components/Formulary/Input';
import Footer from '../views/Footer';
import Header from '../views/Header';

const Register = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert('SUSCRITO');
   };

   return (
      <div className='content-register'>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header />
         </div>

         <main className='absolute top-24'>
            <div className='register flex flex-col md:flex-row'>
               <div className='register-img md:w-1/2 lg:w-4/6'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/steve-johnson-G-zsrSWvKmc-unsplash.jpg'
                     alt='Login Image'
                     className='object-cover h-full'
                  />
               </div>

               <div className='formulary inputs px-4 md:w-1/2 lg:w-2/6'>
                  <div className='m-8'>
                     <h2 className='text-white text-3xl font-medium my-10'>Registration</h2>

                     <form onSubmit={(e) => handleSubmit(e)}>
                        <Input htmlFor={'firstName'} label={'First Name'} type={'text'} />
                        <Input htmlFor={'lastName'} label={'Last Name'} type={'text'} />
                        <Input htmlFor={'username'} label={'Username'} type={'text'} />
                        <Input htmlFor={'email'} label={'Email'} type={'email'} />
                        <Input htmlFor={'password'} label={'Password'} type={'password'} />
                        <Input htmlFor={'confirmpassword'} label={'Confirm Password'} type={'password'} />

                        <input
                           type='submit'
                           className='w-full bg-indigo-600 text-white text-lg rounded-2xl p-2 my-10'
                        />
                     </form>

                     <p className='text-white text-sm text-center'>Log In | Lost Password</p>
                  </div>
               </div>
            </div>

            <footer className='content-footer w-full'>
               <Footer />
            </footer>
         </main>
      </div>
   );
};

export default Register;
