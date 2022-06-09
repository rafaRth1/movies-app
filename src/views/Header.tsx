import { useNavigate, useParams } from 'react-router-dom';
import useResize from '../hooks/useResize';

import { IoPersonAdd } from 'react-icons/io5';
import { IoLogInOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoToggleSharp } from 'react-icons/io5';
import { IoMenuOutline } from 'react-icons/io5';

const Header = ({ setActive }: any) => {
   const navigate = useNavigate();
   const size = useResize();

   return (
      <header className='h-20 z-50 w-full bg-neutral-800 py-3 px-5 flex justify-between items-center cursor-pointer'>
         <div className='logo text-white text-3xl uppercase font-light' onClick={() => navigate('/')}>
            Ingmar
         </div>

         <div className='flex gap-3'>
            <div className='register cursor-pointer'>
               <IoPersonAdd
                  color='white'
                  size={23}
                  onClick={() => {
                     navigate('/register');
                  }}
               />
            </div>
            <div className='login cursor-pointer'>
               <IoLogInOutline
                  color='white'
                  size={23}
                  onClick={() => {
                     navigate('/login');
                  }}
               />
            </div>
            <div className='search'>
               <IoSearchOutline color='white' size={23} />
            </div>
            <div className='switch-mode'>
               <IoToggleSharp color='white' size={23} />
            </div>

            {window.location.href !== 'http://localhost:3000/register'
               ? size.width < 1024 && (
                    <div className='menu-mobile' onClick={() => setActive(true)}>
                       <IoMenuOutline color='white' size={23} />
                    </div>
                 )
               : null}
         </div>
      </header>
   );
};

export default Header;
