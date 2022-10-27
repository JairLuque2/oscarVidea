import { canciones } from "../data/canciones";

export const getSongByRitmo = (ritmo) => {
  const validPublishers = ["romanticaFlor", "preciosaFlor", "bolivianitaDulceColor", "CantaYuriOrtuno", "taquiraris", "morenadasYCuecas"];

  if (!validPublishers.includes(ritmo)) {
    throw new Error(`${ritmo} no es un ritmo valido `);
  }

  return canciones.filter((cancion) => cancion.ritmo === ritmo);
};
