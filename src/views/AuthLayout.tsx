import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';
import useResize from '../hooks/useResize';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

import '../styles/main.css';
import { IoCloseCircleOutline } from 'react-icons/io5';

const AuthLayout = () => {
   const [active, setActive] = useState(false);
   const modal = useAppSelector((state) => state.reducer.modal);
   const showNavigate = useAppSelector((state) => state.reducer.showNavigation);
   const sizes = useResize();

   return (
      <div className={`relative w-full h-full ${modal && 'overflow-hidden'}bg-red-800`}>
         <div className='content-header-full h-20 fixed w-full z-50 '>
            <Header setActive={setActive} />
         </div>
         <main className='h-full w-full absolute top-24'>
            <div className='main-content'>
               <div
                  className={`navigation  bg-neutral-800 pl-2 ${showNavigate ? 'hidden' : 'block'} ${
                     sizes.width < 1024
                        ? 'fixed top-0 right-0 h-full w-2/6 bg-neutral-800 z-50 overflow-y-hidden'
                        : ''
                  } ${
                     sizes.width < 1024
                        ? active
                           ? 'transition-all translate-x-25'
                           : 'translate-x-full transition-all'
                        : ''
                  }`}
               >
                  {sizes.width < 1024 && (
                     <IoCloseCircleOutline
                        color='white'
                        size={30}
                        className='absolute right-6 top-6'
                        onClick={() => setActive(false)}
                     />
                  )}
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
