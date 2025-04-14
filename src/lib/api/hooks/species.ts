import { useQuery } from '@tanstack/react-query'

import { getSpecies, getSpeciesById } from '../services/species'

export function useSpecies() {
  return useQuery({
    queryKey: ['species'],
    queryFn: async () => {
      const { species, error } = await getSpecies()
      if (error) throw error
      return species
    },
  })
}

export function useSpeciesById(id: string) {
  return useQuery({
    queryKey: ['species', id],
    queryFn: async () => {
      const { species, error } = await getSpeciesById(id)
      if (error) throw error
      return species
    },
    enabled: !!id,
  })
}
