import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../views';
import { Spinner } from '../../components';

import './MovieLayout.css';

export const MovieLayout = () => {
	return (
		<div className='container-main'>
			<Header />

			<div className='content-main w-full h-full'>
				<Navigation />

				<main className='page-main w-full'>
					<div className='page-main-content'>
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
