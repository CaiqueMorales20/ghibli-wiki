import filmsData from '../data/films.json'
import { Film } from '../interfaces'

export const getFilms = (): { films: Film[] } => {
  return { films: filmsData }
}

export const getFilmById = (id: string): { film: Film | null } => {
  const film = filmsData.find((f) => f.id === id) || null

  return { film }
}
