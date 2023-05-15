import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useDarkMode } from '../../../hooks';
import { handleActiveNavigation, showModalSearch, switchTheme } from '../../../store';
import { IoMenuOutline } from 'react-icons/io5';
import { MdOutlineLogin, MdOutlineSearch, MdPersonAddAlt1, MdToggleOff, MdToggleOn } from 'react-icons/md';
import LogoDark from '../../../assets/ingmar-logo-b.svg';
import LogoLight from '../../../assets/ingmar-logo-a.svg';

import './Header.css';

export const Header = () => {
	const [themeDark, setThemeDark] = useState(false);
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const iconOption = {
		className: 'text-black dark:text-white',
		sizeIcon: 25,
	};

	const handleSwitch = () => {
		toggleDarkMode(isDarkMode);
		setThemeDark(!themeDark);
		dispatch(switchTheme(themeDark));
	};

	return (
		<div className='content-header-full sticky top-0 h-22 w-full z-30'>
			<header className='h-22 w-full bg-neutral-200 dark:bg-neutral-900 transition-all py-3 px-5 flex justify-between items-center'>
				<div
					className='logo text-black dark:text-white font-["Rubik"] text-3xl uppercase font-bold cursor-pointer p-1'
					onClick={() => navigate('/')}>
					<Link to='/'>
						<img
							src={isDarkMode ? LogoDark : LogoLight}
							alt='Image Logo'
							className='w-full h-12'
						/>
					</Link>
				</div>

				<div className='flex gap-3'>
					<div className='register cursor-pointer'>
						<MdPersonAddAlt1
							className={iconOption.className}
							size={iconOption.sizeIcon}
							onClick={() => {
								navigate('/auth/register');
							}}
						/>
					</div>

					<div className='login cursor-pointer'>
						<MdOutlineLogin
							className={iconOption.className}
							size={iconOption.sizeIcon}
							onClick={() => {
								navigate('/auth/login');
							}}
						/>
					</div>

					<div
						className='search cursor-pointer'
						onClick={() => dispatch(showModalSearch(true))}>
						<MdOutlineSearch
							className={iconOption.className}
							size={iconOption.sizeIcon}
						/>
					</div>

					<div
						className='switch-mode cursor-pointer'
						onClick={handleSwitch}>
						{isDarkMode ? (
							<MdToggleOn
								className={iconOption.className}
								size={iconOption.sizeIcon}
							/>
						) : (
							<MdToggleOff
								className={iconOption.className}
								size={iconOption.sizeIcon}
							/>
						)}
					</div>

					<div
						className='menu-mobile cursor-pointer'
						onClick={() => dispatch(handleActiveNavigation(true))}>
						<IoMenuOutline
							className={iconOption.className}
							size={iconOption.sizeIcon}
						/>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
