import Footer from '../views/Footer';
import Header from '../views/Header';

const Login = () => {
   return (
      <>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header />
         </div>

         <div className='register'>
            <div className='register-img'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/steve-johnson-G-zsrSWvKmc-unsplash.jpg'
                  alt='Login Image'
               />
            </div>

            <div className='formulary'>
               <input type='text' className='' />
            </div>
         </div>

         <footer className='content-footer w-full'>
            <Footer />
         </footer>
      </>
   );
};

export default Login;
