import { apiClient } from '../client'
import { Vehicle } from '../types'

export interface VehiclesResponse {
  vehicles: Vehicle[]
  error: Error | null
}

export interface VehicleResponse {
  vehicle: Vehicle | null
  error: Error | null
}

export const getVehicles = async (): Promise<VehiclesResponse> => {
  let error = null
  let vehicles: Vehicle[] = []

  try {
    vehicles = await apiClient.get<Vehicle[]>('/vehicles')
    return { vehicles, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch vehicles: ${message}`)
    return { vehicles, error }
  }
}

export const getVehicleById = async (id: string): Promise<VehicleResponse> => {
  let error = null
  let vehicle = null

  try {
    vehicle = await apiClient.get<Vehicle>(`/vehicles/${id}`)
    return { vehicle, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch vehicle with ID ${id}: ${message}`)
    return { vehicle, error }
  }
}
