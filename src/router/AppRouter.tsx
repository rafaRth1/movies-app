import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';
import MoviesRoutes from '../app/routes/MoviesRoutes';
import AuthRotues from '../auth/routes/AuthRotues';

export const AppRouter = () => {
	return (
		<Routes>
			{/* {routes.map(({ to, path, Component }) => (
				<Route
					key={to}
					path={path}
					element={<Component />}
				/>
			))}

			<Route
				path='*'
				element={
					<Navigate
						replace
						to={routes[0].to}
					/>
				}
			/> */}

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
