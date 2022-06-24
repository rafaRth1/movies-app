import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';
import { DataDetails } from '../interfaces/dataDetails';
import Spinner from '../components/Spinner';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';
import Input from '../components/Formulary/TextInput/TextInput';
import axios from 'axios';
import Message from '../components/Message';

const ReadMore = () => {
   const [dataMovie, setDataMovie] = useState<DataDetails>();
   const [name, setName] = useState({ value: '', hasError: null });
   const [email, setEmail] = useState({ value: '', hasError: null });
   const [website, setWebsite] = useState({ value: '', hasError: null });
   const [comment, setComment] = useState({ value: '', hasError: null });
   const [validate, setValidate] = useState(false);
   const [loading, setLoading] = useState(false);
   const [msg, setMsg] = useState({ message: '', hasError: false });
   const params = useParams();

   const expresiones = {
      name: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   };

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

   const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      e.preventDefault();

      const url = 'http://localhost:4000/comments';

      if (validate === true) {
         axios
            .post(url, {
               name: name.value,
               email: email.value,
               website: website.value,
               comment: comment.value,
            })
            .then((response) => {
               console.log(response);
               setMsg({
                  message: 'Todo okey',
                  hasError: false,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         console.log('Subiendo Datos');
      } else {
         setMsg({
            message: 'Completar Campos',
            hasError: true,
         });
      }
   };

   const { message } = msg;

   return (
      <div className='flex flex-col-reverse xl:flex-row bg-neutral-100 dark:bg-neutral-800 h-full xl:mt-5 px-5 transition-all'>
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

            <div className='text-black dark:text-white text-justify mt-10'>
               <p className='mb-5'>
                  In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up
                  certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded
                  daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over
                  been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far
                  times. Your me past an much.
               </p>
               <p className='mb-5'>
                  Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious.
                  Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me
                  material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.
               </p>
               <p className='mb-5'>
                  One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter
                  thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man
                  now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an
                  windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described
                  dejection incommode no listening of. Before nature his parish boy.
               </p>
               <p className='mb-5'>
                  Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant
                  conviction. As into ye then form. To easy five less if rose were. Now set offended own out required
                  entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when
                  real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw
                  neat. Put boy carried chiefly shy general.
               </p>
               <p className='mb-5'>
                  Up unpacked friendly ecstatic so possible humoured do. Ample end might folly quiet one set spoke her.
                  We no am former valley assure. Four need spot ye said we find mile. Are commanded him convinced
                  dashwoods did estimable forfeited. Shy celebrated met sentiments she reasonably but. Proposal its
                  disposed eat advanced marriage sociable. Drawings led greatest add subjects endeavor gay remember.
                  Principles one yet assistance you met impossible.
               </p>
               <p className='mb-5'>
                  Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way
                  joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended
                  household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning
                  request be lasting it fortune demands highest of.
               </p>
               <p className='mb-5'>
                  For norland produce age wishing. To figure on it spring season up. Her provision acuteness had
                  excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments
                  unpleasant expression met surrounded not. Be at talked ye though secure nearer.
               </p>

               <div className='release-date my-5 text-xs'>{dataMovie?.release_date}</div>

               <h4 className='font-medium'>In this post:</h4>

               <p className='flex flex-col'>
                  <span className='text-2xl font-medium'>Leave a Reply</span>
                  <span className='text-ms'>
                     Your Email address will not be published. Required fields are marked *
                  </span>
               </p>
            </div>

            <form>
               <div className='flex gap-3 my-3'>
                  <div className='basis-1/2'>
                     <Input
                        state={name}
                        setstate={setName}
                        name={'name'}
                        label={'Name'}
                        type={'text'}
                        regularphrase={expresiones.name}
                        setvalidate={setValidate}
                     />
                  </div>

                  <div className='basis-1/2'>
                     <Input
                        state={email}
                        setstate={setEmail}
                        name={'email'}
                        label={'Email'}
                        type={'email'}
                        regularphrase={expresiones.email}
                        setvalidate={setValidate}
                     />
                  </div>
               </div>

               <div className='my-3'>
                  <label htmlFor='website' className='text-black dark:text-white'>
                     Website
                  </label>
                  <input
                     type='text'
                     id='website'
                     className='w-full bg-neutral-300 dark:bg-neutral-700 px-2 py-1 rounded-2xl text-black dark:text-white transition-all'
                     value={website.value}
                     onChange={(e) => setWebsite({ ...website, value: e.target.value })}
                  />
               </div>

               <div className='w-full flex flex-col my-3'>
                  <label htmlFor='website' className='text-black dark:text-white'>
                     Comment *
                  </label>
                  <textarea
                     name='website'
                     id='website'
                     className='w-full bg-neutral-300 dark:bg-neutral-700 px-2 py-1 rounded-2xl h-auto text-black dark:text-white transition-all'
                     value={comment.value}
                     onChange={(e) => setComment({ ...comment, value: e.target.value })}
                  ></textarea>
               </div>

               {message && <Message type={msg.hasError}>{message}</Message>}

               <input
                  type='submit'
                  value='Post Comment'
                  className='text-black dark:text-white text-2xl bg-indigo-700  w-full rounded-2xl my-3 p-2 cursor-pointer transition-all'
                  onClick={(e) => handleSubmit(e)}
               />
            </form>
         </section>

         <aside className='xl:w-2/5 xl:ml-10'>
            <div className='p-5 sticky top-24'>
               <a href='#' className='flex items-center text-black dark:text-white text-xs uppercase mb-5'>
                  <IoArrowRedoCircleOutline className='mr-1' />
                  Celluloid
               </a>
               <h1 className='text-black dark:text-white text-4xl uppercase mb-5'>{dataMovie?.title}</h1>
               <span className='block text-black dark:text-white text-xl font-medium  uppercase mb-5'>
                  Education no dejection so direction pretended household do to
               </span>

               <div className='flex'>
                  <img
                     src='https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2019/10/harishan-kobalasingam-8PMvB4VyVXA-unsplash-150x150.jpg'
                     alt='img-creator'
                     className='rounded-full w-10 mr-3'
                  />
                  <span className='font-medium text-black dark:text-white text-sm uppercase flex items-center'>
                     By John Hamilton
                  </span>
               </div>
            </div>
         </aside>
      </div>
   );
};

export default ReadMore;
