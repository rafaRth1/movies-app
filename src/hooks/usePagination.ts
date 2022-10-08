import { useState } from 'react';

export const usePagination = (movies: []) => {
	const [currentPage, setCurrentPage] = useState(1);
	const amountPage = 12;
	const totalNumPages = Math.ceil(movies.length / amountPage);
	const moviesPagination = movies.slice((currentPage - 1) * amountPage, (currentPage - 1) * amountPage + amountPage);

	return {
		currentPage,
		setCurrentPage,
		totalNumPages,
		amountPage,
		moviesPagination,
	};
};
