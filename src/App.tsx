import { AppRouter } from './router/AppRouter';
import { ModalSearch, Modal } from './components';
import './App.css';

function App() {
	return (
		<div className='App min-h-screen relative'>
			<Modal />
			<ModalSearch />
			<AppRouter />
		</div>
	);
}

export default App;
