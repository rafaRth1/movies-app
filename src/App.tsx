import Modal from './components/Modal/Modal';
import ModalSearch from './components/ModalSearch';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './views/AuthLayout';
import MainPageMovie from './pages/MainPage';
import ReadMore from './pages/ReadMore';
import Reviews from './pages/pagesNavigation/Reviews/Reviews';
import MovieArchive from './pages/pagesNavigation/MovieArchive/MovieArchive';
import ResultSearch from './pages/ResultSearch';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieInformation from './pages/pagesNavigation/MovieArchive/MovieInformation/MovieInformation';
import './App.css';

function App() {
   return (
      <>
         <Modal />
         <ModalSearch />
         <Routes>
            <Route path='/' element={<AuthLayout />}>
               <Route index element={<MainPageMovie />} />
               <Route path='/read-more/:id' element={<ReadMore />} />
               <Route path='reviews' element={<Reviews />} />
               <Route path='movie-archive' element={<MovieArchive />} />
               <Route path='result/:name' element={<ResultSearch />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='movie-archive/movie-information/:id' element={<MovieInformation />} />
         </Routes>
      </>
   );
}

export default App;
