import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import useResize from '../hooks/useResize';
import { activeNavigationMobileMobile } from '../store';
import { IoCloseCircleOutline } from 'react-icons/io5';

export const NavigationMovile = () => {
	const dispatch = useAppDispatch();
	const activeNavigationMobile = useAppSelector((state) => state.movie.activeNavigationMobile);
	const theme = useAppSelector((state) => state.movie.themeDark);
	const sizes = useResize();
	const showMobileClass = `fixed top-0 right-0 h-full bg-neutral-800 z-50 overflow-y-hidden`;
	const listClassLI =
		'hover:bg-neutral-300 dark:hover:bg-neutral-700 cursor-pointer rounded-2xl text-sm block py-4 px-5 mb-1';

	return (
		<div className='navigate-movile'>
			<div
				className={`bg-neutral-200 dark:bg-neutral-800 pl-2 w-80 ${sizes.width < 1024 && showMobileClass} ${
					sizes.width < 1024
						? activeNavigationMobile
							? 'transition-all translate-x-25'
							: 'translate-x-full transition-all'
						: 'hidden'
				}`}>
				<IoCloseCircleOutline
					color={theme ? 'white' : 'black'}
					size={30}
					className='absolute right-6 top-6 cursor-pointer'
					onClick={() => dispatch(activeNavigationMobileMobile(false))}
				/>
				<div className='h-full mx-3'>
					<nav className='sticky top-24 w-full'>
						<div className='text-black dark:text-white'>
							<NavLink
								to={'/reviews'}
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
		</div>
	);
};

export default NavigationMovile;
