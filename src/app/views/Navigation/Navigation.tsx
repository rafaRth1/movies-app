import { routes } from './routes';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { handleActiveNavigation } from '@/store';
import SubMenuNav from '@/components/SubMenuNav/SubMenuNav';
import { genresData } from '@/data/genres';
import { MdClose } from 'react-icons/md';

import './Navigation.css';

export const Navigation = () => {
	const { activeNavigation } = useAppSelector((state) => state.movie);
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const listClassLI = `rounded-2xl block text-md`;

	return (
		<nav className={`navigate bg-[#0D0D10] p-4 ${activeNavigation ? 'active-menu-movil' : ''}`}>
			<MdClose
				color={'white'}
				size={30}
				className='button-close absolute right-6 top-6 cursor-pointer z-20'
				onClick={() => dispatch(handleActiveNavigation(false))}
			/>

			<div className='navigate-content'>
				<ul className='text-white p-3'>
					{routes.map(({ to, name, subPath }) =>
						subPath ? (
							<li
								key={to}
								className={`bg-[#18181d] rounded-2xl cursor-pointer px-3 py-4 mb-1 relative menu-${to}`}>
								<span className={listClassLI}>{name}</span>

								<SubMenuNav
									to={to}
									data={genresData}
								/>
							</li>
						) : (
							<li
								key={to}
								className={`${
									pathname === `/${to}` ? 'bg-gradient-to-r from-[#3754ea] to-[#881cf8]' : ''
								} bg-gradient-to-r hover:from-[#3754ea] hover:to-[#881cf8] rounded-2xl px-3 py-4 mb-1`}>
								<NavLink
									to={to}
									className={listClassLI}>
									{name}
								</NavLink>
							</li>
						)
					)}
				</ul>
			</div>
		</nav>
	);
};
