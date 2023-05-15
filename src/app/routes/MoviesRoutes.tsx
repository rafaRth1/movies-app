import { Navigate, Route, Routes } from 'react-router-dom';
import { MovieLayout } from '../layout/MovieLayout';
import { MainPage, MovieArchive, MovieInformation, ReadMore, ResultSearch, Reviews } from '../pages';
import routes from './routes';

console.log('Prueba');

export const MoviesRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<MovieLayout />}>
				<Route
					index
					element={<MainPage />}
				/>
				<Route
					path='read-more/:id'
					element={<ReadMore />}
				/>
				<Route
					path='reviews'
					element={<Reviews />}
				/>
				<Route
					path='movie-archive'
					element={<MovieArchive />}
				/>

				<Route
					path='result/:name'
					element={<ResultSearch />}
				/>

				<Route
					path='movie-information/:id'
					element={<MovieInformation />}
				/>

				{/* {routes.map(({ to, path, Component }) => (
					<Route
						key={to}
						path={path}
						element={<Component />}
					/>
				))} */}
			</Route>

			<Route
				path='/*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
};

export default MoviesRoutes;
