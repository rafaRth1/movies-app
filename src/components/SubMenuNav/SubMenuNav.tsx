import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface Props {
	to: string;
	data: Data[];
}

interface Data {
	id: number;
	name: string;
}

const SubMenuNav = ({ to, data }: Props) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				className='arrow-sub-menu absolute right-4 top-[17px] cursor-pointer'>
				<IoChevronDownSharp
					className='text-white'
					size={23}
				/>
			</div>

			<div className={`wrapper-${to} ${isActive ? 'active-subgenre mt-2 ' : ''}`}>
				<ul className='select-none'>
					{data.map((data) => (
						<li key={data.id}>
							<Link
								to={`/genres/${data.id}`}
								aria-current='page'
								state={{ name: data.name }}
								className='p-3 w-full block bg-gradient-to-r hover:from-[#3754ea] hover:to-[#881cf8] rounded-md'>
								{data.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default SubMenuNav;
