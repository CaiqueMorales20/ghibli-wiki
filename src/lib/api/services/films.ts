import { apiClient } from '../client'
import { Film } from '../types'

export interface FilmsResponse {
  films: Film[]
  error: Error | null
}

export interface FilmResponse {
  film: Film | null
  error: Error | null
}

export const getFilms = async (): Promise<FilmsResponse> => {
  let error = null
  let films: Film[] = []

  try {
    films = await apiClient.get<Film[]>('/films')
    return { films, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch films: ${message}`)
    return { films, error }
  }
}

export const getFilmById = async (id: string): Promise<FilmResponse> => {
  let error = null
  let film = null

  try {
    film = await apiClient.get<Film>(`/films/${id}`)
    return { film, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch film with ID ${id}: ${message}`)
    return { film, error }
  }
}
