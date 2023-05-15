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
const ReviewsLazy = lazy(() => import('../pages/Reviews/Reviews'));
const MovieArchiveLazy = lazy(() => import('../pages/MovieArchive/MovieArchive'));
const ResultSearchLazy = lazy(() => import('../pages/ResultSearch/ResultSearch'));
const MovieInformationLazy = lazy(() => import('../pages/MovieInformation/MovieInformation'));

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
];

export default routes;
