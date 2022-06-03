import { useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import handleLeft from '../../helpers/handleLeft';
import handleRigth from '../../helpers/handleRigth';

import '../../styles/Slides/slideCategories.css';

const SlideCategories = () => {
   let fila = useRef<HTMLDivElement>(null);

   return (
      <div className='content-featured-categories p-3'>
         <div className='flex justify-between items-center p-1 mb-5'>
            <h2 className='text-white text-xl font-medium'>Featured Categories</h2>

            <div className='arrows flex'>
               <button onClick={() => handleLeft(fila)}>
                  <IoChevronBackOutline color='white' className={'cursor-pointer'} />
               </button>
               <button onClick={() => handleRigth(fila)}>
                  <IoChevronForwardOutline color='white' className={'cursor-pointer'} />
               </button>
            </div>
         </div>

         <div className='featured-categories-slide' ref={fila}>
            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/02/category8-01-500x323.jpg'
                  alt='Image Categorie'
               />
               <div className='name-categori '>
                  <h5 className='text-white font-medium text-lg'>TV Shows</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/02/category7-01-500x323.jpg'
                  alt='Image Categorie'
               />

               <div className='name-categori'>
                  <h5 className='text-white font-medium text-lg'>Photoplay</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/02/category1-01-500x323.jpg'
                  alt='Image Categorie'
               />
               <div className='name-categori'>
                  <h5 className='text-white font-medium text-lg'>Cinema</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/04/category9-01-500x323.jpg'
                  alt='Image Categorie'
               />
               <div className='name-categori'>
                  <h5 className='text-white font-medium text-lg'>Netflix</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SlideCategories;
