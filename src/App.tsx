import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './views/AuthLayout';
import MainPageMovie from './pages/MainPage';
import ReadMoreMovies from './pages/ReadMore';
import Modal from './components/Modal';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
   return (
      <BrowserRouter>
         <Modal />
         <Routes>
            <Route path='/' element={<AuthLayout />}>
               <Route index element={<MainPageMovie />} />
               <Route path='/read-more/:id' element={<ReadMoreMovies />} />
               <Route path='/reviews' element={<Reviews />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
