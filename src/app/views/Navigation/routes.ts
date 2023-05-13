interface Route {
	to: string;
	name: string;
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
		to: 'genres',
		name: 'Genres',
	},

	{
		to: 'all-news',
		name: 'All News',
	},

	{
		to: 'all-genres',
		name: 'All News',
	},

	{
		to: 'pages',
		name: 'Pages',
	},
];
