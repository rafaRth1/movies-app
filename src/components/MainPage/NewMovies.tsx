import { useRef } from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import { ResultMoviePopular } from '../../interfaces/movieInterfaces';
import handleLeft from '../../helpers/handleLeft';
import handleRigth from '../../helpers/handleRigth';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import '../../styles/Slides/slideNewMovies.css';

const NewMovies = () => {
   const moviesPopular = useAppSelector((state) => state.reducer.moviesPopular);
   let fila = useRef<HTMLDivElement>(null);

   return (
      <div className='content-new-movies p-3 cursor-pointer'>
         <div className='flex justify-between items-center p-3'>
            <h2 className='text-white text-xl font-medium'>New Movies Archive</h2>

            <div className='arrows flex'>
               <button onClick={() => handleLeft(fila)}>
                  <IoChevronBackOutline color='white' className={'cursor-pointer'} />
               </button>
               <button onClick={() => handleRigth(fila)}>
                  <IoChevronForwardOutline color='white' className={'cursor-pointer'} />
               </button>
            </div>
         </div>

         <div className='new-movies' ref={fila}>
            {moviesPopular.map((movie: ResultMoviePopular) => (
               <div key={movie.id} className='card-new-movies '>
                  <img
                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                     alt='Img Poster'
                     className='mb-3'
                  />
                  <h5 className='text-white font-mediun text-sm mb-2'>{movie.title}</h5>
                  <span className='block text-white text-sm'>{movie.release_date}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default NewMovies;
