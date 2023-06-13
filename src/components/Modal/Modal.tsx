import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { getContentModal, showModal } from '../../store';
import { IoCloseSharp, IoMenuOutline } from 'react-icons/io5';

import './modal.css';
import { ImageBox } from '../ImageBox/ImageBox';

export const Modal = () => {
	const dispatch = useAppDispatch();
	const { modal, contentModal } = useAppSelector((state) => state.movie);

	const handleCloseModal = () => {
		dispatch(showModal(false));
		dispatch(getContentModal({}));
	};

	return (
		<div className={`modal ${modal ? 'flex activeModal' : 'pointer-events-none'}`}>
			<div className={`content-modal rounded-lg bg-neutral-900 ${modal ? '' : 'modalAnimation'}`}>
				<div className='title flex justify-between items-center p-3 text-white font-medium cursor-pointer'>
					<Link
						to={`/read-more/${contentModal.id}`}
						onClick={handleCloseModal}>
						<h1 className='text-2xl hover:text-indigo-700'>{contentModal.title}</h1>
					</Link>
					<IoCloseSharp
						size={25}
						className='cursor-pointer'
						color='white'
						onClick={handleCloseModal}
					/>
				</div>

				<figure className='modal-img'>
					{contentModal?.img ? (
						<ImageBox
							data-img={`https://image.tmdb.org/t/p/w500${contentModal?.img}`}
							width='100%'
							height='250px'
							alt='image'
							className='h-full px-3'
						/>
					) : null}
				</figure>

				<div className='date p-3'>
					<span className='text-white block text-xs'>{contentModal.date}</span>
				</div>

				<p className='text-white px-3 py-0'>{contentModal.overview}</p>

				<Link
					to={`/read-more/${contentModal.id}`}
					className='text-white bg-indigo-700 block rounded-3xl m-4 p-1'
					onClick={handleCloseModal}>
					<div className='flex justify-center items-center gap-2'>
						<IoMenuOutline />
						<span>Full Read</span>
					</div>
				</Link>
			</div>
			<div
				className='absolute top-0 left-0 w-full h-full z-40'
				onClick={handleCloseModal}></div>
		</div>
	);
};
