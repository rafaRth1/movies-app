import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks';
import { handleActiveNavigation, showModalSearch, switchTheme } from '@/store';
import { IoExitOutline, IoMenuOutline, IoPersonAddOutline, IoSearchOutline } from 'react-icons/io5';
import LogoDark from '@/assets/ingmar-logo-b.svg';

import './Header.css';

export const Header = () => {
	// const [themeDark, setThemeDark] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const iconOption = {
		className: 'text-white',
		sizeIcon: 25,
	};

	const handleSwitch = () => {
		// toggleDarkMode(isDarkMode);
		// setThemeDark(!themeDark);
		// dispatch(switchTheme(themeDark));
	};

	return (
		<div className='container-header-full sticky top-0 h-22 w-full z-30 bg-[#0D0D10] backdrop-blur-xl bg-opacity-70 backdrop-saturate-150'>
			<header className='h-22 w-full py-3 px-5 flex justify-between items-center'>
				<div
					className='logo text-white text-3xl uppercase font-bold cursor-pointer p-1'
					onClick={() => navigate('/')}>
					<Link to='/'>
						<img
							src={LogoDark}
							alt='Image Logo'
							className='w-full h-12'
						/>
					</Link>
				</div>

				<div className='flex gap-3'>
					<div className='register cursor-pointer'>
						<IoPersonAddOutline
							className={iconOption.className}
							size={iconOption.sizeIcon}
							onClick={() => {
								navigate('/auth/register');
							}}
						/>
					</div>

					<div className='login cursor-pointer'>
						<IoExitOutline
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
						<IoSearchOutline
							className={iconOption.className}
							size={iconOption.sizeIcon}
						/>
					</div>
					{/* 
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
					</div> */}

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
