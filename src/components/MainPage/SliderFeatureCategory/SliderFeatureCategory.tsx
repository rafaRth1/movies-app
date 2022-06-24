import { useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import handleLeft from '../../../helpers/handleLeft';
import handleRigth from '../../../helpers/handleRigth';

import './sliderFeatureCategory.css';

const SliderFeatureCategory = () => {
   let fila = useRef<HTMLDivElement>(null);

   return (
      <div className='content-featured-categories p-3'>
         <div className='flex justify-between items-center p-1 mb-5'>
            <h2 className='text-black dark:text-white text-xl font-medium'>Featured Categories</h2>

            <div className='arrows flex'>
               <button onClick={() => handleLeft(fila)}>
                  <IoChevronBackOutline className={'cursor-pointer text-black dark:text-white'} />
               </button>
               <button onClick={() => handleRigth(fila)}>
                  <IoChevronForwardOutline className={'cursor-pointer text-black dark:text-white'} />
               </button>
            </div>
         </div>

         <div className='featured-categories-slide' ref={fila}>
            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/tvshows-500x347.jpg'
                  alt='Image Categorie'
               />
               <div className='name-categori '>
                  <h5 className='text-white font-medium text-lg'>TV Shows</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/Cinema-500x347.jpg'
                  alt='Image Categorie'
               />

               <div className='name-categori'>
                  <h5 className='text-white font-medium text-lg'>Photoplay</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/feature-500x347.jpg'
                  alt='Image Categorie'
               />
               <div className='name-categori'>
                  <h5 className='text-white font-medium text-lg'>Cinema</h5>
               </div>
            </div>

            <div className='card-categorie cursor-pointer px-5'>
               <img
                  src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/netflix-500x347.jpg'
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

export default SliderFeatureCategory;
