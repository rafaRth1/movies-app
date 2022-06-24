import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useRedux';
import { fetchMovies, fetchMoviesUpcoming, fetchTopRated } from '../redux/slice';
import SliderForYou from '../components/MainPage/SliderForYou/SliderForYou';
import SliderLatestArticle from '../components/MainPage/SliderLatestArticle/SliderLatestArticle';
import SliderFeatureCategory from '../components/MainPage/SliderFeatureCategory/SliderFeatureCategory';
import PopularRead from '../components/MainPage/PopularRead/PopularRead';
import SliderFeatureReviews from '../components/MainPage/SliderFeatureReviews/SliderFeatureReviews';
import NewMovies from '../components/MainPage/SliderNewMovies/SliderNewMovies';

import '../styles/Slides/slides.css';

const MainPageMovie = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
      dispatch(fetchMoviesUpcoming());
      dispatch(fetchTopRated());
   }, []);

   return (
      <div className='bg-neutral-100 dark:bg-neutral-800 transition-all'>
         <SliderForYou />

         <section className='slides'>
            <div className='slides-content'>
               <SliderLatestArticle />
               <SliderFeatureCategory />
               <SliderFeatureReviews />
            </div>

            <div className='content-popular-read'>
               <PopularRead />
            </div>

            <NewMovies />
         </section>
      </div>
   );
};

export default MainPageMovie;
