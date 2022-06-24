import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { activeNavigationMobileMobile } from '../redux/slice';
import useResize from '../hooks/useResize';
import { IoCloseCircleOutline } from 'react-icons/io5';

const NavigationMovile = () => {
   const dispatch = useAppDispatch();
   const activeNavigationMobile = useAppSelector((state) => state.reducer.activeNavigationMobile);
   const theme = useAppSelector((state) => state.reducer.themeDark);
   const sizes = useResize();
   const showMobileClass = `fixed top-0 right-0 h-full w-2/6 bg-neutral-800 z-50 overflow-y-hidden`;

   return (
      <div
         className={`bg-neutral-200 dark:bg-neutral-800 pl-2 ${sizes.width < 1024 && showMobileClass} ${
            sizes.width < 1024
               ? activeNavigationMobile
                  ? 'transition-all translate-x-25'
                  : 'translate-x-full transition-all'
               : 'hidden'
         }`}
      >
         <IoCloseCircleOutline
            color={theme ? 'white' : 'black'}
            size={30}
            className='absolute right-6 top-6 cursor-pointer'
            onClick={() => dispatch(activeNavigationMobileMobile(false))}
         />
         <div className='h-full mx-3'>
            <nav className='sticky top-24 w-full'>
               <ul className='text-black dark:text-white'>
                  <li className=' hover:bg-neutral-300 dark:hover:bg-neutral-600  cursor-pointer rounded-2xl text-sm'>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        Reviews
                     </Link>
                  </li>

                  <li className='hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer rounded-2xl text-sm'>
                     <Link to={'movie-archive'} className='block py-4 px-5'>
                        Movie Archive
                     </Link>
                  </li>
                  <li className='hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer rounded-2xl text-sm'>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        Genres
                     </Link>
                  </li>
                  <li className='hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer rounded-2xl text-sm'>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        All News
                     </Link>
                  </li>
                  <li className='hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer rounded-2xl text-sm'>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        All Genres
                     </Link>
                  </li>
                  <li className='hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer rounded-2xl text-sm'>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        Pages
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default NavigationMovile;
