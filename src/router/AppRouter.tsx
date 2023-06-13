import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HeaderPlaceHolder } from '../components/HeaderPlaceholder/HeaderPlaceholder';

const MoviesRoutesLazy = lazy(() => import('../app/routes/MoviesRoutes'));
const AuthRotuesLazy = lazy(() => import('../auth/routes/AuthRotues'));

export const AppRouter = () => {
	return (
		<Suspense fallback={<HeaderPlaceHolder />}>
			<Routes>
				<Route
					path='/*'
					element={<MoviesRoutesLazy />}
				/>

				<Route
					path='/auth/*'
					element={<AuthRotuesLazy />}
				/>
			</Routes>
		</Suspense>
	);
};
