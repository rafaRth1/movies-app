import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../redux/slice';

const Navigation = () => {
   return (
      <div className='h-full mx-3'>
         <nav className='sticky top-24 w-full'>
            <ul className='text-white'>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Reviews</Link>
               </li>
               <li className='py-4 px-6 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Actors</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Directors</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Movie Archive</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>All News Movie</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>All Categories</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Page Example</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Page Example 2</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Contact Page</Link>
               </li>
               <li className='py-4 px-5 hover:bg-neutral-900 cursor-pointer rounded-2xl text-sm'>
                  <Link to={'/reviews'}>Error 404 Page</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Navigation;
