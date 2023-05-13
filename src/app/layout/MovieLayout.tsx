import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../views';

import './MovieLayout.css';

export const MovieLayout = () => {
	return (
		<div className='relative'>
			<Header />

			<div className='container-main w-full h-full relative'>
				<Navigation />

				<main className='w-full'>
					<div className='page-content w-full'>
						<Outlet />
					</div>
				</main>
			</div>

			{/* <Footer /> */}
		</div>
	);
};
