import { canciones } from '../data/canciones';

export const getSongBytitle = (title = '') => {
	title = title.toLocaleLowerCase().trim();

	if (title.length === 0) return [];

	return canciones.filter((cancion) =>
		cancion.title.toLocaleLowerCase().includes(title),
	);
};
