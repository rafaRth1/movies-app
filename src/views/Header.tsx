import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useResize from '../hooks/useResize';
import { IoPersonAdd } from 'react-icons/io5';
import { IoLogInOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoToggleSharp } from 'react-icons/io5';
import { IoMenuOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { activeNavigationMobileMobile, showModalSearch, switchTheme } from '../redux/slice';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
   const [themeDark, setThemeDark] = useState(false);
   const theme = useAppSelector((state) => state.reducer.themeDark);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const size = useResize();
   const [isDarkMode, toggleDarkMode] = useDarkMode();

   return (
      <header className='h-20 w-full bg-neutral-200 dark:bg-neutral-800 transition-all py-3 px-5 flex justify-between items-center cursor-pointer'>
         <div className='logo text-black dark:text-white text-3xl uppercase font-light' onClick={() => navigate('/')}>
            Ingmar
         </div>
         <div className='flex gap-3'>
            <div className='register cursor-pointer'>
               <IoPersonAdd
                  className={'text-black dark:text-white'}
                  size={23}
                  onClick={() => {
                     navigate('/register');
                  }}
               />
            </div>

            <div className='login cursor-pointer'>
               <IoLogInOutline
                  className={'text-black dark:text-white'}
                  size={23}
                  onClick={() => {
                     navigate('/login');
                  }}
               />
            </div>

            <div className='search' onClick={() => dispatch(showModalSearch(true))}>
               <IoSearchOutline className={'text-black dark:text-white'} size={23} />
            </div>

            <div
               className='switch-mode'
               onClick={() => {
                  toggleDarkMode(isDarkMode), setThemeDark(!themeDark), dispatch(switchTheme(themeDark));
               }}
            >
               <IoToggleSharp className={'text-black dark:text-white'} size={23} />
            </div>

            {size.width < 1024 && (
               <div className='menu-mobile' onClick={() => dispatch(activeNavigationMobileMobile(true))}>
                  <IoMenuOutline className={'text-black dark:text-white'} size={23} />
               </div>
            )}
         </div>
      </header>
   );
};

export default Header;
