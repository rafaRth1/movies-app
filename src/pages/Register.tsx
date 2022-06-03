import Input from '../components/Formulary/Input';
import Footer from '../views/Footer';
import Header from '../views/Header';

const Register = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert('SUSCRITO');
   };

   return (
      <>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header />
         </div>

         <main className='absolute top-24'>
            <div className='register flex'>
               <div className='register-img w-4/6'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/steve-johnson-G-zsrSWvKmc-unsplash.jpg'
                     alt='Login Image'
                  />
               </div>

               <div className='formulary w-2/6 inputs p-14'>
                  <h2 className='text-white text-3xl font-medium mb-10'>Registration</h2>

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

            <footer className='content-footer w-full'>
               <Footer />
            </footer>
         </main>
      </>
   );
};

export default Register;
