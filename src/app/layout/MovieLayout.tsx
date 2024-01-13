import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@/components';
import { Header, Navigation } from '../views';

export const MovieLayout = () => {
	return (
		<div className='container-main'>
			<Header />

			<div className='flex flex-row min-[990px]:flex-col w-full h-full'>
				<Navigation />

				<main className='bg-[#0D0D10] p-4 w-full'>
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
