import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { ResultMoviePopular } from '../../../interfaces/movieInterfaces';
import { getContentModal, showModal } from '../../../redux/slice';
import handleLeft from '../../../helpers/handleLeft';
import handleRigth from '../../../helpers/handleRigth';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import './sliderLatestArticle.css';

const SliderLatestArticle = () => {
   const dispatch = useAppDispatch();
   const moviesUpComing = useAppSelector((state) => state.reducer.moviesUpComing);
   const selectFirstImagePanel = moviesUpComing.slice(1, 4);
   const selectTwoImagePanel = moviesUpComing.slice(4, 10);
   let fila = useRef<HTMLDivElement>(null);
   const theme = useAppSelector((state) => state.reducer.themeDark);

   const handleShowModal = (dateMovies: object) => {
      dispatch(getContentModal(dateMovies));
      dispatch(showModal(true));
   };

   return (
      <div className='content-slide-article p-3'>
         <div className='flex justify-between items-center p-1 mb-5'>
            <h2 className='text-black dark:text-white text-xl font-medium'>Latest Article</h2>

            <div className='arrows flex'>
               <button onClick={() => handleLeft(fila)}>
                  <IoChevronBackOutline className={'cursor-pointer text-black dark:text-white'} />
               </button>
               <button onClick={() => handleRigth(fila)}>
                  <IoChevronForwardOutline className={'cursor-pointer text-black dark:text-white'} />
               </button>
            </div>
         </div>

         <div className='latest-article-slide' ref={fila}>
            <div className='card-article'>
               <div className='showPanel-one'>
                  {selectFirstImagePanel.map((movie: ResultMoviePopular) => (
                     <div key={movie.id} className='card-article-one'>
                        <img
                           src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                           alt='IMG'
                           className='w-full h-full object-cover rounded-3xl cursor-pointer'
                           onClick={() =>
                              handleShowModal({
                                 id: movie.id,
                                 img: movie.backdrop_path,
                                 title: movie.original_title,
                                 overview: movie.overview,
                                 date: movie.release_date,
                              })
                           }
                        />
                     </div>
                  ))}
               </div>

               <div className='showPanel-two'>
                  {selectTwoImagePanel.map((movie: ResultMoviePopular) => (
                     <div key={movie.id} className='card-article-two'>
                        <img
                           src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                           alt='IMG'
                           className='h-full object-cover rounded-3xl cursor-pointer'
                           onClick={() =>
                              handleShowModal({
                                 id: movie.id,
                                 img: movie.backdrop_path,
                                 title: movie.original_title,
                                 overview: movie.overview,
                                 date: movie.release_date,
                              })
                           }
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SliderLatestArticle;
