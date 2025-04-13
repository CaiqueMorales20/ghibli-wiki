import { apiClient } from '../client'
import { Species } from '../types'

export interface SpeciesListResponse {
  species: Species[]
  error: Error | null
}

export interface SpeciesResponse {
  species: Species | null
  error: Error | null
}

export const getSpecies = async (): Promise<SpeciesListResponse> => {
  let error = null
  let species: Species[] = []

  try {
    species = await apiClient.get<Species[]>('/species')
    return { species, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch species list: ${message}`)
    return { species, error }
  }
}

export const getSpeciesById = async (id: string): Promise<SpeciesResponse> => {
  let error = null
  let species = null

  try {
    species = await apiClient.get<Species>(`/species/${id}`)
    return { species, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch species with ID ${id}: ${message}`)
    return { species, error }
  }
}
