import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useRedux';
import { ResultMoviePopular } from '../../../interfaces/movieInterfaces';
import { IoPerson } from 'react-icons/io5';

const PopularReads = () => {
   const moviesUpComing = useAppSelector((state) => state.reducer.moviesUpComing);
   const selectFirstImagePanel = moviesUpComing.slice(0, 5);
   const navigate = useNavigate();

   return (
      <div className='p-3 h-full'>
         <h2 className='text-black dark:text-white text-xl font-medium p-1'>Popular Reads</h2>

         <div className='popular-read'>
            {selectFirstImagePanel.map((movie: ResultMoviePopular) => (
               <div className='popular-read-card flex p-5 w-full' key={movie.id}>
                  <img
                     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                     alt='Image Backdrop'
                     className='w-1/2 md:w-96 lg:w-80 xl:w-24 h-auto object-cover rounded-3xl cursor-pointer hover:opacity-50 transition-all px-2'
                     onClick={() => navigate(`/read-more/${movie.id}`)}
                  />

                  <div className='movie-data flex flex-col mx-2 w-full xl:justify-center '>
                     <h6 className='text-black dark:text-white font-medium'>
                        <Link to={`/read-more/${movie.id}`}>{movie.title}</Link>
                     </h6>
                     <span className='text-black dark:text-white block'>{movie.release_date}</span>
                     <span className='text-black dark:text-white block'>Voto Promedio: {movie.vote_average}</span>
                     <span className='text-black dark:text-white flex gap-2 items-center'>
                        <IoPerson color='black' />
                        Vote Count: {movie.vote_count}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PopularReads;
