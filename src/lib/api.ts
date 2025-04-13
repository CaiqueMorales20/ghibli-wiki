// Re-export everything from the new API structure
export * from './api/index'

// Keep backward compatibility
export type Filme = import('./api/types').Film
export const obterFilmes = async (): Promise<import('./api/types').Film[]> => {
  const { getFilms } = await import('./api/services/films')
  return getFilms()
}

export const obterFilmePorId = async (
  id: string,
): Promise<import('./api/types').Film> => {
  const { getFilmById } = await import('./api/services/films')
  return getFilmById(id)
}
