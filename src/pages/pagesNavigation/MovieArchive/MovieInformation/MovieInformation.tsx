import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../config/clienteAxios';
import { Footer, Header, NavigationMovile } from '../../../../views';
import { ImageMovieInformation } from './components/ImageMovieInformation';
import { DataDetails } from '../../../../interfaces/dataDetails';

import './movieInformation.css';
import { BodyMovieInformation } from './components/BodyMovieInformation';

export const MovieInformation = () => {
	const [dataMovie, setDataMovie] = useState<DataDetails>();
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchMovieInformationId = async () => {
			const movieInformationId = await clienteAxios(`/${id}`);
			setDataMovie(movieInformationId.data);
			setLoading(false);
		};

		fetchMovieInformationId();
	}, []);

	return (
		<div className='content-movie-information'>
			<Header />

			<NavigationMovile />

			<div className='movie-information'>
				<ImageMovieInformation
					dataMovie={dataMovie}
					loading={loading}
				/>
				<BodyMovieInformation
					dataMovie={dataMovie}
					loading={loading}
				/>
			</div>

			<Footer />
		</div>
	);
};
