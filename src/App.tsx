import { AppRouter } from './router/AppRouter';
import { ModalSearch, Modal } from './components';
import './App.css';

function App() {
	return (
		<>
			<Modal />
			<ModalSearch />
			<AppRouter />
		</>
	);
}

export default App;
