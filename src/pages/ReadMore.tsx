import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';
import { DataDetails } from '../interfaces/dataDetails';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';
import Spinner from '../components/Spinner';

const ReadMoreMovies = () => {
   const [dataMovie, setDataMovie] = useState<DataDetails>();
   const [loading, setLoading] = useState(false);
   const params = useParams();

   useEffect(() => {
      const petition = async () => {
         const movie = await clienteAxios(`/${params.id}`);
         setDataMovie(movie.data);
         setLoading(true);
      };

      petition();

      window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   }, []);

   return (
      <div className='flex flex-col-reverse xl:flex-row  bg-neutral-800 h-full xl:mt-5 px-5'>
         <section className='xl:w-3/5'>
            {loading ? (
               <img
                  src={`https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`}
                  alt='Image-Poster'
                  className='rounded-3xl'
               />
            ) : (
               <div className='flex justify-center'>
                  <Spinner />
               </div>
            )}

            <div className='text-white text-justify mt-10'>
               <p className='mb-5'>
                  In to am attended desirous raptures declared diverted confined at. Collected instantly
                  remaining up certainly to necessary as. Over walk dull into son boy door went new. At or
                  happiness commanded daughters as. Is handsome an declared at received in extended vicinity
                  subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use.
                  Match round scale now sex style far times. Your me past an much.
               </p>
               <p className='mb-5'>
                  Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne
                  tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold.
                  Required bringing me material stanhill jointure is as he. Mutual indeed yet her living
                  result matter him bed whence.
               </p>
               <p className='mb-5'>
                  One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling
                  laughter thoughts property she met way. Companions shy had solicitude favourable own. Which
                  could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters
                  it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy
                  saw. Discourse unwilling am no described dejection incommode no listening of. Before nature
                  his parish boy.
               </p>
               <p className='mb-5'>
                  Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably
                  unpleasant conviction. As into ye then form. To easy five less if rose were. Now set
                  offended own out required entirely. Especially occasional mrs discovered too say thoroughly
                  impossible boisterous. My head when real no he high rich at with. After so power of young
                  as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general.
               </p>
               <p className='mb-5'>
                  Up unpacked friendly ecstatic so possible humoured do. Ample end might folly quiet one set
                  spoke her. We no am former valley assure. Four need spot ye said we find mile. Are commanded
                  him convinced dashwoods did estimable forfeited. Shy celebrated met sentiments she
                  reasonably but. Proposal its disposed eat advanced marriage sociable. Drawings led greatest
                  add subjects endeavor gay remember. Principles one yet assistance you met impossible.
               </p>
               <p className='mb-5'>
                  Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried
                  for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so
                  direction pretended household do to. Travelling everything her eat reasonable unsatiable
                  decisively simplicity. Morning request be lasting it fortune demands highest of.
               </p>
               <p className='mb-5'>
                  For norland produce age wishing. To figure on it spring season up. Her provision acuteness
                  had excellent two why intention. As called mr needed praise at. Assistance imprudence yet
                  sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer.
               </p>
            </div>
         </section>

         <aside className='xl:w-2/5 xl:ml-10'>
            <div className='p-5 sticky top-24'>
               <a href='#' className='flex items-center text-white text-xs uppercase mb-5'>
                  <IoArrowRedoCircleOutline className='mr-1' />
                  Celluloid
               </a>
               <h1 className='text-white text-4xl uppercase mb-5'>{dataMovie?.title}</h1>
               <span className='block text-white text-xl font-medium  uppercase mb-5'>
                  Education no dejection so direction pretended household do to
               </span>

               <div className='flex'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2019/10/harishan-kobalasingam-8PMvB4VyVXA-unsplash-150x150.jpg'
                     alt='img-creator'
                     className='rounded-full w-10 mr-3'
                  />
                  <span className='font-medium text-white text-sm uppercase flex items-center'>
                     By John Hamilton
                  </span>
               </div>
            </div>
         </aside>
      </div>
   );
};

export default ReadMoreMovies;
