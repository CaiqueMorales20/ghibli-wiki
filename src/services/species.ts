import speciesData from '../data/species.json'
import { Species } from '../interfaces'

export const getSpecies = (): { species: Species[] } => {
  return { species: speciesData }
}

export const getSpeciesById = (id: string): { species: Species | null } => {
  const species = speciesData.find((s) => s.id === id) || null

  return { species }
}
