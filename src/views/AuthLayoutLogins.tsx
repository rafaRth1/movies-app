import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NavigationMovile from './NavigationMovile';

const AuthLayoutLogins = () => {
   return (
      <div className='session'>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header />
         </div>

         <main>
            <div className='navigate-movile'>
               <NavigationMovile />
            </div>

            <Outlet />
         </main>
         <footer className='content-footer w-full'>
            <Footer />
         </footer>
      </div>
   );
};

export default AuthLayoutLogins;
