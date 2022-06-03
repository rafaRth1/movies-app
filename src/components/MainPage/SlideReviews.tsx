import { useRef } from 'react';
import handleLeft from '../../helpers/handleLeft';
import handleRigth from '../../helpers/handleRigth';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useAppSelector } from '../../hooks/useRedux';
import { ResultTopRated } from '../../interfaces/topRated';

import '../../styles/Slides/slideReviews.css';

const SlideReviews = () => {
   const movie = useAppSelector((state) => state.reducer.moviesTopRated);
   const movieTopRated = movie.slice(1, 5);

   let fila = useRef<HTMLDivElement>(null);

   return (
      <div className='content-feature-review p-3'>
         <div className='flex justify-between items-center p-3'>
            <h2 className='text-white text-xl font-medium'>Featured Review</h2>

            <div className='arrows flex'>
               <button onClick={() => handleLeft(fila)}>
                  <IoChevronBackOutline color='white' className={'cursor-pointer'} />
               </button>
               <button onClick={() => handleRigth(fila)}>
                  <IoChevronForwardOutline color='white' className={'cursor-pointer'} />
               </button>
            </div>
         </div>

         <section className='feature-review' ref={fila}>
            {movieTopRated.map((movie: ResultTopRated) => (
               <div key={movie.id} className='feature-review-card py-3 px-5'>
                  <div className='img-feature-review relative'>
                     <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt='Image Poster'
                     />
                     <div
                        className={`rated absolute text-white top-5 right-5 px-5 py-4 rounded-2xl font-medium  ${
                           movie.vote_average > 8 ? 'bg-green-700' : 'bg-yellow-400'
                        }`}
                     >
                        {movie.vote_average}
                     </div>
                  </div>
                  <div className='data-review-feature text-white'>
                     <h5 className='text-2xl font-medium mb-3'>{movie.title}</h5>
                     <span className='block text-sm mb-3'>{movie.release_date}</span>
                     <p className='text-justify pr-2'>{movie.overview.slice(0, 300).concat('...')}</p>
                  </div>
               </div>
            ))}
         </section>
      </div>
   );
};

export default SlideReviews;
