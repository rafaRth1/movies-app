import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const MainPageLazy = lazy(() => import('../pages/MainPage/MainPage'));
const ReadMoreLazy = lazy(() => import('../pages/ReadMore/ReadMore'));
const ReviewsLazy = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));
const MovieArchiveLazy = lazy(() => import('../pages/MovieArchivePage/MovieArchivePage'));
const ResultSearchLazy = lazy(() => import('../pages/ResultSearch/ResultSearch'));
const MovieInformationLazy = lazy(() => import('../pages/MovieInformation/MovieInformationPage'));
const GenresPageLazy = lazy(() => import('../pages/GenresPage/GenresPage'));
const CategoriesPageLazy = lazy(() => import('../pages/CategoriesPage/CategoriesPage'));

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		Component: MainPageLazy,
		name: 'MainPageLazy',
	},

	{
		to: '/read-more/:id',
		path: 'read-more/:id',
		Component: ReadMoreLazy,
		name: 'ReadMoreLazy',
	},

	{
		to: '/reviews',
		path: 'reviews',
		Component: ReviewsLazy,
		name: 'ReviewsLazy',
	},

	{
		to: '/movie-archive',
		path: 'movie-archive',
		Component: MovieArchiveLazy,
		name: 'MovieArchiveLazy',
	},

	{
		to: '/result/:name',
		path: 'result/:name',
		Component: ResultSearchLazy,
		name: 'ResultSearchLazy',
	},

	{
		to: '/movie-information/:id',
		path: 'movie-information/:id',
		Component: MovieInformationLazy,
		name: 'MovieInformationLazy',
	},

	{
		to: '/genres',
		path: 'genres/:id',
		Component: GenresPageLazy,
		name: 'GenresLazy',
	},

	{
		to: '/all-categories',
		path: 'all-categories',
		Component: CategoriesPageLazy,
		name: 'CategoriesPageLazy',
	},
];

export default routes;
