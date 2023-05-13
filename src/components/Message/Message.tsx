interface Props {
	type: boolean;
	children: any;
}

export const Message = ({ children, type }: Props) => {
	return (
		<div
			className={`${
				!type ? 'bg-blue-800' : 'bg-red-800'
			} text-white w-full p-2 font-medium rounded-2xl text-center my-3`}>
			{children}
		</div>
	);
};
