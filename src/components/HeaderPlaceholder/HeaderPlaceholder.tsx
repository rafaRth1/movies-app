import { useDarkMode } from '@/hooks';
import { Link } from 'react-router-dom';
import LogoDark from '@/assets/ingmar-logo-b.svg';
import LogoLight from '@/assets/ingmar-logo-a.svg';

export const HeaderPlaceHolder = () => {
	const [isDarkMode, toggleDarkMode] = useDarkMode();

	return (
		<div className='content-header-full sticky top-0 h-22 w-full z-30'>
			<header className='h-22 w-full bg-neutral-200 dark:bg-neutral-900 transition-all py-3 px-5 flex justify-between items-center'>
				<div className='logo text-black dark:text-white text-3xl uppercase font-bold cursor-pointer p-1'>
					<Link to='/'>
						<img
							src={isDarkMode ? LogoDark : LogoLight}
							alt='Image Logo'
							className='w-full h-12'
						/>
					</Link>
				</div>
			</header>
		</div>
	);
};
