import { useQuery } from '@tanstack/react-query'

import { getLocationById, getLocations } from '../services/locations'

export function useLocations() {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const { locations, error } = await getLocations()
      if (error) throw error
      return locations
    },
  })
}

export function useLocationById(id: string) {
  return useQuery({
    queryKey: ['locations', id],
    queryFn: async () => {
      const { location, error } = await getLocationById(id)
      if (error) throw error
      return location
    },
    enabled: !!id,
  })
}
