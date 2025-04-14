import { useQuery } from '@tanstack/react-query'

import { getVehicleById, getVehicles } from '../services/vehicles'

export function useVehicles() {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: async () => {
      const { vehicles, error } = await getVehicles()
      if (error) throw error
      return vehicles
    },
  })
}

export function useVehicleById(id: string) {
  return useQuery({
    queryKey: ['vehicles', id],
    queryFn: async () => {
      const { vehicle, error } = await getVehicleById(id)
      if (error) throw error
      return vehicle
    },
    enabled: !!id,
  })
}
