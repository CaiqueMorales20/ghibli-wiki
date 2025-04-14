import { useQuery } from '@tanstack/react-query'

import { getFilmById, getFilms } from '../services/films'

export function useFilms() {
  return useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const { films, error } = await getFilms()
      if (error) throw error
      return films
    },
  })
}

export function useFilmById(id: string) {
  return useQuery({
    queryKey: ['films', id],
    queryFn: async () => {
      const { film, error } = await getFilmById(id)
      if (error) throw error
      return film
    },
    enabled: !!id,
  })
}
