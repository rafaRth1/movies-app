import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useRedux';
import { ResultMoviePopular } from '../../../interfaces/movieInterfaces';
import Spinner from '../../Spinner';
import handleLeft from '../../../helpers/handleLeft';
import handleRigth from '../../../helpers/handleRigth';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IoChevronForwardOutline } from 'react-icons/io5';

import './sliderForYou.css';

const SliderForYou = () => {
   const moviesPopular = useAppSelector((state) => state.reducer.moviesPopular);

   let fila = useRef<HTMLDivElement>(null);

   return (
      <div className='slider-regular w-full'>
         {moviesPopular.length === 0 ? (
            <div className='flex justify-center'>
               <Spinner />
            </div>
         ) : (
            <>
               <div className='flex justify-between items-center p-3'>
                  <h2 className='text-black dark:text-white text-xl font-medium'>For You</h2>

                  <div className='arrows flex'>
                     <button onClick={() => handleLeft(fila)}>
                        <IoChevronBackOutline className={`'cursor-pointer text-black dark:text-white`} />
                     </button>
                     <button onClick={() => handleRigth(fila)}>
                        <IoChevronForwardOutline className={`'cursor-pointer text-black dark:text-white`} />
                     </button>
                  </div>
               </div>

               <section id='forYouContent'>
                  <div className='carousel' ref={fila}>
                     {moviesPopular.map((movie: ResultMoviePopular) => (
                        <div key={movie.id} className='card-movies-popular px-5 relative'>
                           <div className='absolute bottom-5 left-10 z-10'>
                              <Link to={'/read-more/5450'} className='text-white text-xl font-medium block mb-2'>
                                 {movie.original_title}
                              </Link>
                              <Link
                                 to={`/read-more/${movie.id}`}
                                 className='text-white text-sm z-10 bg-indigo-700 hover:bg-indigo-500 transition-colors p-2 rounded-3xl'
                              >
                                 Read More
                              </Link>
                           </div>
                           <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='Img Movie' />
                        </div>
                     ))}
                  </div>
               </section>
            </>
         )}
      </div>
   );
};

export default SliderForYou;
