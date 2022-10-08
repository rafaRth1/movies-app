import { Route, Routes } from 'react-router-dom';
import { AuthRotues } from '../auth/routes/AuthRotues';
import { MoviesRoutes } from '../pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/*'
				element={<MoviesRoutes />}
			/>

			<Route
				path='/auth/*'
				element={<AuthRotues />}
			/>
		</Routes>
	);
};
