import { Outlet } from 'react-router-dom';
import { Header, Navigation, NavigationMovile, Footer } from '.';

import '../styles/main.css';

export const MovieLayout = () => {
	return (
		<div className='relative w-full'>
			<Header />

			<NavigationMovile />

			<main className='w-full absolute top-22'>
				<div className='main-content'>
					<Navigation />

					<div className='page-content'>
						<Outlet />
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};
