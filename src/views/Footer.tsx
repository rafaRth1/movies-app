import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoSkype } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoLogoVimeo } from 'react-icons/io5';

const Footer = () => {
   return (
      <div className='flex bg-black footer p-5 h-full w-full'>
         <div className='our-work-is text-white flex-grow w-1/4 p-3'>
            <h6 className='font-medium mb-5'>Our Work Is</h6>
            <p>Designed, crafted and built with React, TailwindCSS and ACF Pro.</p>
         </div>
         <div className='contact text-white flex-grow w-1/4 p-3'>
            <h6 className='font-medium mb-5'>Contact</h6>
            93 Pendwyallt Road - Burrington - UK
            <br />
            BS18
            <br />
            4JQ 077 3021 1081
            <br />
            info@example.com
         </div>
         <div className='find-us text-white flex-grow w-1/4 p-3'>
            <h6 className='font-medium mb-5'>Find Us</h6>

            <div className='red-social flex gap-5'>
               <IoLogoFacebook size={20} />
               <IoLogoSkype size={20} />
               <IoLogoInstagram size={20} />
               <IoLogoYoutube size={20} />
               <IoLogoVimeo size={20} />
            </div>
         </div>
         <div className='about text-white flex-grow w-1/4 p-3'>
            <h6 className='font-medium mb-5'>About</h6>
            <p> 2022 INGMAR . All Rights Reserved Designed with ❤️ and 🧠 by RAMSTHEMES</p>
         </div>
      </div>
   );
};

export default Footer;
