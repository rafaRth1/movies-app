import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchNowPlaying } from '../../../redux/slice';
import { ResultNowPlaying } from '../../../interfaces/nowPlaying';
import Pagination from '../../../components/Pagination/Pagination';
import Spinner from '../../../components/Spinner';

const MovieArchive = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const amountPerPage = 12;
   const movies = useAppSelector((state) => state.reducer.moviesNowPlaying);
   const loading = useAppSelector((state) => state.reducer.loading);
   console.log(loading);
   const dispatch = useAppDispatch();
   const totalNumPages = Math.ceil(movies.length / amountPerPage);
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(fetchNowPlaying());
   }, []);

   return (
      <div className='content-movie-archive'>
         <h3 className='text-white text-2xl font-medium block my-3'>Movies</h3>
         {loading ? (
            <div className='flex justify-center items-center w-full h-40'>
               <Spinner />
            </div>
         ) : (
            <div className='movies-now-playing flex flex-wrap'>
               {movies
                  .slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                  .map((movies: ResultNowPlaying) => (
                     <div
                        key={movies.id}
                        className='card-now-playing text-white px-3 basis-1/2 md:basis-1/3 xl:basis-1/6'
                     >
                        <img
                           src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                           alt='Image Poster'
                           className='rounded-3xl w-full cursor-pointer transition-all hover:opacity-80'
                           onClick={() => navigate(`/movie-archive/movie-information/${movies.id}`)}
                        />
                        <div className='my-3 p-2'>
                           <h6 className='text-white font-medium mb-3'>
                              <Link to={`/movie-archive/movie-information/${movies.id}`}>{movies.title}</Link>
                           </h6>
                           <p className='text-xs'>{movies.release_date.slice(0, 4)}</p>
                        </div>
                     </div>
                  ))}
            </div>
         )}

         <Pagination
            amountPerPage={amountPerPage}
            movies={movies}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalNumPages={totalNumPages}
         />
      </div>
   );
};

export default MovieArchive;
