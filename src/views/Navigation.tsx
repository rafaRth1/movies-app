import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className='h-full mx-3'>
         <nav className='sticky top-24 w-full'>
            <ul className='text-white'>
               <li className=' hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Reviews
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Actors
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Directors
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/movie-archive'} className='block py-4 px-5'>
                     Movie Archive
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     All News Movie
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     All Categories
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Page Example
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Page Example 2
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Contact Page
                  </Link>
               </li>
               <li className='hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'} className='block py-4 px-5'>
                     Error 404 Page
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Navigation;
