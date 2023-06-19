import { AppRouter } from './router/AppRouter';
import { Modal, ModalSearch } from './components';
import './App.css';
import '@splidejs/react-splide/css';

function App() {
	return (
		<div className='app'>
			<AppRouter />
			<Modal />
			<ModalSearch />
		</div>
	);
}

export default App;
