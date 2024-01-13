import { IoChatbubbles, IoFileTrayFull } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

interface Route {
	to: string;
	name: string;
	subPath?: boolean;
}

export const routes: Route[] = [
	{
		to: 'reviews',
		name: 'Reviews',
	},

	{
		to: 'movie-archive',
		name: 'Movie Archive',
	},

	{
		to: 'all-categories',
		name: 'All Categories',
	},

	{
		to: 'genres',
		name: 'All Genres',
		subPath: true,
	},
];
