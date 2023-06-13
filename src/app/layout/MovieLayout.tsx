import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../views';
import { Spinner } from '../../components';

import './MovieLayout.css';

export const MovieLayout = () => {
	return (
		<div className='relative'>
			<Header />

			<div className='container-main w-full h-full relative'>
				<Navigation />

				<main className='main-page w-full'>
					<div className='page-content w-full h-full'>
						<Suspense fallback={<Spinner className='h-40' />}>
							<Outlet />
						</Suspense>
					</div>
				</main>
			</div>

			{/* <Footer /> */}
		</div>
	);
};
