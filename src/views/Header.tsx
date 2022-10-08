import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { activeNavigationMobileMobile, showModalSearch, switchTheme } from '../store/movies/movieSlice';
import { useAppDispatch, useDarkMode } from '../hooks';
import { IoPersonAdd, IoLogInOutline, IoSearchOutline, IoToggleSharp, IoMenuOutline } from 'react-icons/io5';

export const Header = () => {
	const [themeDark, setThemeDark] = useState(false);
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const dispatch: any = useAppDispatch();
	const navigate = useNavigate();
	const iconOption = {
		classname: 'text-black dark:text-white',
		sizeIcon: 23,
	};

	return (
		<div className='content-header-full fixed h-22 w-full z-30'>
			<header className='h-22 w-full bg-neutral-200 dark:bg-neutral-900 transition-all py-3 px-5 flex justify-between items-center border-b'>
				<div
					className='logo text-black dark:text-white text-3xl uppercase font-light cursor-pointer'
					onClick={() => navigate('/')}>
					Ingmar
				</div>

				<div className='flex gap-3'>
					<div className='register cursor-pointer'>
						<IoPersonAdd
							className={iconOption.classname}
							size={iconOption.sizeIcon}
							onClick={() => {
								navigate('/auth/register');
							}}
						/>
					</div>

					<div className='login cursor-pointer'>
						<IoLogInOutline
							className={iconOption.classname}
							size={iconOption.sizeIcon}
							onClick={() => {
								navigate('/auth/login');
							}}
						/>
					</div>

					<div
						className='search cursor-pointer'
						onClick={() => dispatch(showModalSearch(true))}>
						<IoSearchOutline
							className={iconOption.classname}
							size={iconOption.sizeIcon}
						/>
					</div>

					<div
						className='switch-mode cursor-pointer'
						onClick={() => {
							toggleDarkMode(isDarkMode), setThemeDark(!themeDark), dispatch(switchTheme(themeDark));
						}}>
						<IoToggleSharp
							className={iconOption.classname}
							size={iconOption.sizeIcon}
						/>
					</div>

					<div
						className='menu-mobile cursor-pointer block lg:hidden'
						onClick={() => dispatch(activeNavigationMobileMobile(true))}>
						<IoMenuOutline
							className={iconOption.classname}
							size={iconOption.sizeIcon}
						/>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
