import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';
import { ResultSearchMovies } from '../interfaces/ResultSearch';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner';

const ResultSearch = () => {
   const resultSearch = useAppSelector((state) => state.reducer.resultMoviesSearch);
   const loading = useAppSelector((state) => state.reducer.loading);
   const { name } = useParams();
   const [currentPage, setCurrentPage] = useState(1);
   const amountPerPage = 12;
   const totalNumPages = Math.ceil(resultSearch.length / amountPerPage);
   const navigate = useNavigate();

   return (
      <div className='content-result'>
         <h3 className='text-white text-3xl font-medium mb-3'>{`Search Results for '${name}'`}</h3>

         {loading ? (
            <div className='flex justify-center items-center w-full h-40'>
               <Spinner />
            </div>
         ) : (
            <div className='flex flex-wrap'>
               {resultSearch
                  .slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                  .map((movies: ResultSearchMovies) => (
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
                        </div>
                     </div>
                  ))}
            </div>
         )}

         <Pagination
            amountPerPage={amountPerPage}
            movies={resultSearch}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalNumPages={totalNumPages}
         />
      </div>
   );
};

export default ResultSearch;
