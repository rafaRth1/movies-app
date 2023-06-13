import { Navigate, Route, Routes } from 'react-router-dom';
import { MovieLayout } from '../layout/MovieLayout';
import routes from './routes';

export const MoviesRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<MovieLayout />}>
				{routes.map(({ to, path, Component }) => (
					<Route
						key={to}
						path={path}
						element={<Component />}
					/>
				))}
			</Route>

			<Route
				path='/*'
				element={
					<Navigate
						replace
						to='/'
					/>
				}
			/>
		</Routes>
	);
};

export default MoviesRoutes;
