import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useRedux';
import { fetchMovies, fetchMoviesUpcoming, fetchTopRated } from '../redux/slice';
import SliderRegular from '../components/MainPage/SliderRegular';
import SlideArticles from '../components/MainPage/SlideArticles';
import SlideCategories from '../components/MainPage/SlideCategories';
import PopularReads from '../components/MainPage/PopularReads';
import SlideReviews from '../components/MainPage/SlideReviews';
import NewMovies from '../components/MainPage/NewMovies';

import '../styles/Slides/slides.css';

const MainPageMovie = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
      dispatch(fetchMoviesUpcoming());
      dispatch(fetchTopRated());
   }, []);

   return (
      <div className='bg-neutral-800 grid'>
         <SliderRegular />

         <section className='slides'>
            <div className='slides-content'>
               <SlideArticles />
               <SlideCategories />
               <SlideReviews />
            </div>

            <div className='content-popular-read'>
               <PopularReads />
            </div>

            <NewMovies />
         </section>
      </div>
   );
};

export default MainPageMovie;
