import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import NavigationMovile from './NavigationMovile';
import Footer from './Footer';

import '../styles/main.css';

const AuthLayout = () => {
   return (
      <div className={`relative w-full`}>
         <div className='content-header-full fixed h-20 w-full z-40 '>
            <Header />
         </div>

         <div className='navigate-movile'>
            <NavigationMovile />
         </div>

         <main className='w-full sticky top-24'>
            <div className={`main-content grid`}>
               <div className={`navigate`}>
                  <Navigation />
               </div>

               <div className='page-content w-full'>
                  <Outlet />
               </div>
            </div>
         </main>

         <footer className='content-footer w-full relative'>
            <Footer />
         </footer>
      </div>
   );
};

export default AuthLayout;
