import React from 'react';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';

const Aside = ({ datamovie }: any) => {
   return (
      <aside className='xl:w-2/5 xl:ml-10'>
         <div className='p-5 sticky top-24'>
            <a href='#' className='flex items-center text-white text-xs uppercase mb-5'>
               <IoArrowRedoCircleOutline className='mr-1' />
               Celluloid
            </a>
            <h1 className='text-white text-4xl uppercase mb-5'>{datamovie?.title}</h1>
            <span className='block text-white text-xl font-medium  uppercase mb-5'>
               Education no dejection so direction pretended household do to
            </span>

            <div className='flex'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2019/10/harishan-kobalasingam-8PMvB4VyVXA-unsplash-150x150.jpg'
                  alt='img-creator'
                  className='rounded-full w-10 mr-3'
               />
               <span className='font-medium text-white text-sm uppercase flex items-center'>By John Hamilton</span>
            </div>
         </div>
      </aside>
   );
};

export default Aside;
