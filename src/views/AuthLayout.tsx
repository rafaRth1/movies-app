import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

import '../styles/main.css';

const AuthLayout = () => {
   const modal = useAppSelector((state) => state.reducer.modal);
   const showNavigate = useAppSelector((state) => state.reducer.showNavigation);

   return (
      <div className={`relative w-full h-full ${modal ? 'overflow-hidden' : ''}bg-red-800`}>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header />
         </div>
         <main className='h-full w-full absolute top-24'>
            <div className='main-content'>
               <div className={`navigation bg-neutral-800 pl-2 ${showNavigate ? 'hidden' : 'block'}`}>
                  <Navigation />
               </div>
               <div className='page-content w-full'>
                  <Outlet />
               </div>
               <footer className='content-footer w-full'>
                  <Footer />
               </footer>
            </div>
         </main>
      </div>
   );
};

export default AuthLayout;
