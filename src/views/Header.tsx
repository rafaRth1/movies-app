import { useNavigate } from 'react-router-dom';

import { IoPersonAdd } from 'react-icons/io5';
import { IoLogInOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoToggleSharp } from 'react-icons/io5';

const Header = () => {
   const navigate = useNavigate();

   return (
      <header className='h-20 z-50 w-full bg-neutral-800 py-3 px-5 flex justify-between items-center'>
         <div className='logo text-white text-3xl uppercase font-light'>Ingmar</div>

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

            <div className='login'>
               <IoLogInOutline color='white' size={23} />
            </div>

            <div className='search'>
               <IoSearchOutline color='white' size={23} />
            </div>

            <div className='switch-mode'>
               <IoToggleSharp color='white' size={23} />
            </div>
         </div>
      </header>
   );
};

export default Header;
