import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';
import useResize from '../hooks/useResize';

const Navigation = () => {
   const { width } = useResize();
   const listClassLI = 'hover:bg-neutral-300 dark:hover:bg-neutral-700 cursor-pointer rounded-2xl text-sm';

   return (
      <div
         className={` pl-2 bg-neutral-100 dark:bg-neutral-800 transition-all h-full ${
            width < 1024 ? 'hidden' : 'none'
         }`}
      >
         <div className='h-full mx-3'>
            <nav className='sticky top-24 w-full'>
               <ul className='text-black dark:text-white'>
                  <li className={listClassLI}>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        Reviews
                     </Link>
                  </li>
                  <li className={listClassLI}>
                     <Link to={'movie-archive'} className='block py-4 px-5'>
                        Movie Archive
                     </Link>
                  </li>
                  <li className={listClassLI}>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        Genres
                     </Link>
                  </li>
                  <li className={listClassLI}>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        All News
                     </Link>
                  </li>
                  <li className={listClassLI}>
                     <Link to={'reviews'} className='block py-4 px-5'>
                        All Genres
                     </Link>
                  </li>
                  <li className={listClassLI}>
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

export default Navigation;
