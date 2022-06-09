import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../config/clienteAxios';
import Header from '../../../../views/Header';
import { DataDetails } from '../../../../interfaces/dataDetails';

import './movieInformation.css';

const MovieInformation = () => {
   const [dataMovie, setDataMovie] = useState<DataDetails>();
   const [loading, setLoading] = useState(true);

   const { id } = useParams();

   useEffect(() => {
      const petition = async () => {
         const movie = await clienteAxios(`/${id}`);
         setDataMovie(movie.data);
         setLoading(false);
      };

      petition();
   }, []);

   return (
      <div className='content-movie-information'>
         <div className='movie-information'>
            <div className='img-movie-information w-full bg-center bg-cover'>
               <img
                  src={`https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`}
                  alt='Image BackDrop'
                  className='w-full h-full object-cover'
               />
            </div>

            <div className='details-movie-information px-3'>
               <div className='flex flex-wrap p-4'>
                  <div className='title mb-3 basis-full'>
                     <h2 className='text-white text-4xl font-medium inline '>{dataMovie?.original_title}</h2>
                     <span className='text-white text-sm'>{dataMovie?.release_date.slice(0, 4)}</span>

                     <div className='flex items-center gap-3 my-3'>
                        <div className='vote-average text-white border-4 inline-block px-2 py-1 rounded-xl'>
                           PG - {dataMovie?.vote_average}
                        </div>
                        <div className='gender text-white'>
                           {dataMovie?.genres.map((genre) => genre.name)}
                        </div>
                        <div className='duration-movie text-white'>{dataMovie?.runtime}mins</div>
                     </div>
                  </div>

                  <div className='basis-1/2'>
                     <img
                        src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}
                        alt='Image Poster'
                        className='rounded-3xl'
                     />
                  </div>

                  <div className='overview basis-1/2 px-3'>
                     <p className='text-white text-justify'>{dataMovie?.overview}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieInformation;
