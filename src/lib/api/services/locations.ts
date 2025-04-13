import { apiClient } from '../client'
import { Location } from '../types'

export interface LocationsResponse {
  locations: Location[]
  error: Error | null
}

export interface LocationResponse {
  location: Location | null
  error: Error | null
}

export const getLocations = async (): Promise<LocationsResponse> => {
  let error = null
  let locations: Location[] = []

  try {
    locations = await apiClient.get<Location[]>('/locations')
    return { locations, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch locations: ${message}`)
    return { locations, error }
  }
}

export const getLocationById = async (
  id: string,
): Promise<LocationResponse> => {
  let error = null
  let location = null

  try {
    location = await apiClient.get<Location>(`/locations/${id}`)
    return { location, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch location with ID ${id}: ${message}`)
    return { location, error }
  }
}
