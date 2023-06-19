import { IoCloseSharp } from 'react-icons/io5';
import './ModalVideo.css';

export const ModalVideo = ({ showModal, setShowModal }: any) => {
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className={`modal-video ${showModal ? 'active-modal-video' : 'pointer-events-none'}`}>
			<div className={`content-modal-video ${showModal ? 'modal-animation' : ''}`}>
				<IoCloseSharp
					size={25}
					className='cursor-pointer'
					color='white'
					onClick={handleCloseModal}
				/>

				<iframe
					typeof='text/html'
					style={{ backgroundColor: '#000' }}
					datatype=''
					src='//www.youtube.com/embed/lLVmLJdRZJQ?autoplay=0&origin=https//www.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1'
					allow=''
					referrerPolicy='unsafe-url'
					allowFullScreen></iframe>
			</div>
		</div>
	);
};
