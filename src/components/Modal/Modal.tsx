import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { showModal } from '../../store';
import { IoCloseSharp, IoMenuOutline } from 'react-icons/io5';

import './modal.css';

export const Modal = () => {
	const dispatch = useAppDispatch();
	const { modal, contentModal } = useAppSelector((state) => state.movie);

	return (
		<div
			className={`modal ${modal ? 'flex activeModal' : 'pointer-events-none'}`}
			tabIndex={1}
			/*  onKeyDown={(e) => console.log(e.key)} */
			onClick={() => dispatch(showModal(false))}>
			<div className={`content-modal rounded-2xl ${modal ? '' : 'modalAnimation'}`}>
				<div className='title flex justify-between items-center p-3 text-white font-medium cursor-pointer'>
					<h1 className='text-2xl'>{contentModal.title}</h1>
					<IoCloseSharp
						size={25}
						className='cursor-pointer'
						color='white'
						onClick={() => dispatch(showModal(false))}
					/>
				</div>

				<img
					src={
						contentModal.img
							? `https://image.tmdb.org/t/p/w500${contentModal.img}`
							: 'https://educacion30.b-cdn.net/wp-content/uploads/2021/04/peliculas-basadas-en-personajes-historicos-978x571.jpg'
					}
					alt='image'
				/>

				<div className='date'>
					<span className='text-white block p-2 text-xs'>{contentModal.date}</span>
				</div>

				<p className='text-white p-2 font-medium'>
					Impression to discretion understood to we interested he excellence. Him remarkably use projection
					collecting.
				</p>

				<Link
					to={`/read-more/${contentModal.id}`}
					className='text-white bg-indigo-700 block rounded-3xl m-4'>
					<div className='flex justify-center items-center gap-2'>
						<IoMenuOutline />
						<span>Full Read</span>
					</div>
				</Link>
			</div>
		</div>
	);
};
