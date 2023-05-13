import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveValueSearch, showModalSearch } from '../../store';
import { IoCloseSharp } from 'react-icons/io5';

import './ModalSearch.css';

export const ModalSearch = () => {
	const [valueSearch, setValueSearch] = useState<string>('');
	const { modalSearch } = useAppSelector((state) => state.movie);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		e.preventDefault();
		navigate(`/result/${valueSearch}`);
		dispatch(showModalSearch(false));
		dispatch(saveValueSearch(valueSearch));
	};

	return (
		<div className={`${modalSearch ? 'activeModalSearch' : ''} modal-search bg-neutral-800 z-50`}>
			<form className={`form-modal-search z-50 ${modalSearch ? '' : 'modalAnimation'}`}>
				<input
					type='text'
					placeholder='Write Movie'
					className='bg-neutral-800 px-6 py-5 text-white text-xl block mb-4 outlile-none border-2 border-zinc-600 rounded-2xl'
					value={valueSearch}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueSearch(e.target.value)}
				/>
				<input
					type='submit'
					value='Search Movie'
					className='text-white bg-neutral-600 w-full p-3 rounded-2xl cursor-pointer'
					onClick={(e) => handleSubmit(e)}
				/>
			</form>
			<IoCloseSharp
				size={25}
				className='cursor-pointer absolute right-10 top-10 z-50'
				color='white'
				onClick={() => dispatch(showModalSearch(false))}
			/>

			<div
				className='absolute w-full h-full'
				onClick={() => dispatch(showModalSearch(false))}></div>
		</div>
	);
};
