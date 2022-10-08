export const handleLeft = (fila: any) => {
	fila.current.scrollLeft -= fila.current.offsetWidth;
};

export default handleLeft;
