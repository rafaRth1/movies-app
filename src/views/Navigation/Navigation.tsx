import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
	const listClassLI =
		'hover:bg-neutral-300 dark:hover:bg-neutral-700 cursor-pointer rounded-2xl text-sm block py-4 px-5 mb-1';

	return (
		<nav className={`navigate hidden border-r lg:block`}>
			<div className={`bg-neutral-100 dark:bg-neutral-800 transition-all h-full`}>
				<div className='h-full mr-3'>
					<nav className='sticky top-24 w-full'>
						<div className='text-black dark:text-white'>
							<NavLink
								to={'reviews'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								Reviews
							</NavLink>

							<NavLink
								to={'movie-archive'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								Movie Archive
							</NavLink>

							<NavLink
								to={'genres'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								Genres
							</NavLink>

							<NavLink
								to={'all-news'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								All News
							</NavLink>

							<NavLink
								to={'all-genres'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								All Genres
							</NavLink>

							<NavLink
								to={'pages'}
								className={({ isActive }) =>
									`${listClassLI} ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
								}>
								Pages
							</NavLink>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
