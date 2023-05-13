import { IoArrowBackCircleSharp, IoArrowForwardCircle } from 'react-icons/io5';

interface Props {
	amountPage: number;
	movies: any[];
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	totalNumPages: number;
}

export const Pagination = ({ amountPage, movies, currentPage, setCurrentPage, totalNumPages }: Props) => {
	const pages: any[] = [];

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage < totalNumPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		const target = e.target as Element;
		setCurrentPage(Number(target.id));
	};

	const renderPages = () => {
		for (let i = 1; i <= Math.ceil(movies.length / amountPage); i++) {
			pages.push(i);
		}
	};

	renderPages();

	return (
		<>
			<div className='pagination-content'>
				<div className='flex justify-center m-3 p-1'>
					<div className='arrows flex items-center gap-5'>
						<IoArrowBackCircleSharp
							size={30}
							onClick={() => prevPage()}
							className={`${currentPage === 1 ? 'hidden' : 'block'} text-black dark:text-white`}
						/>
						{
							<ul className='list-none flex'>
								{pages.map((number: number) => (
									<li
										className='text-white bg-indigo-700 px-4 py-2 m-1 cursor-pointer rounded-full'
										key={number}
										id={`${number}`}
										onClick={(e) => handleClick(e)}>
										{number}
									</li>
								))}
							</ul>
						}
						<IoArrowForwardCircle
							size={30}
							onClick={() => nextPage()}
							className={`${
								currentPage === totalNumPages ? 'hidden' : 'block'
							} text-black dark:text-white`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
