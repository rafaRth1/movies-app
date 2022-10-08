import { Navigate, Route, Routes } from 'react-router-dom';
import { MovieLayout } from '../../views';
import { MainPage, ReadMore, Reviews, MovieArchive, ResultSearch, MovieInformation } from '../';

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
			</Route>

			<Route
				path='movie-archive/movie-information/:id'
				element={<MovieInformation />}
			/>

			<Route
				path='/*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
};
