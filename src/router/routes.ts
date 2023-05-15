import { LazyExoticComponent, lazy } from 'react';
import { MoviesRoutes } from '../app/routes/MoviesRoutes';
import { AuthRotues } from '../auth/routes/AuthRotues';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const MoviesRoutesLazy = lazy(() => import('../app/routes/MoviesRoutes'));
const AuthRotuesLazy = lazy(() => import('../auth/routes/AuthRotues'));

const routes: Route[] = [
	{
		to: '/',
		path: '/*',
		Component: MoviesRoutesLazy,
		name: 'Movies Routes',
	},

	{
		to: '/auth',
		path: '/auth/*',
		Component: AuthRotuesLazy,
		name: 'Auth Routes',
	},
];

export default routes;
