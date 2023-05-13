import { routes } from './routes';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { handleActiveNavigation } from '../../../store';
import { IoCloseCircleOutline } from 'react-icons/io5';

import './Navigation.css';

export const Navigation = () => {
	const { themeDark, activeNavigation } = useAppSelector((state) => state.movie);
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const listClassLI = `font-["Rubik"] rounded-2xl block`;

	return (
		<nav
			className={`navigate bg-neutral-100 dark:bg-neutral-800 p-4 ${
				activeNavigation ? 'active-menu-movil' : ''
			}`}>
			<IoCloseCircleOutline
				color={themeDark ? 'white' : 'black'}
				size={30}
				className='button-close absolute right-6 top-6 cursor-pointer z-20'
				onClick={() => dispatch(handleActiveNavigation(false))}
			/>

			<div className='navigate-content'>
				<div className='transition-all text-black dark:text-white p-3'>
					<ul>
						{routes.map(({ to, name }) => (
							<li
								key={to}
								className={`${
									pathname === `/${to}` ? 'bg-neutral-300 dark:bg-neutral-700' : ''
								} hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-2xl px-3 py-4 mb-1`}>
								<NavLink
									to={to}
									className={listClassLI}>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
