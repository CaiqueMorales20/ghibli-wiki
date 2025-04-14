import locationsData from '../data/locations.json'
import { Location } from '../interfaces'

export const getLocations = (): { locations: Location[] } => {
  return { locations: locationsData }
}

export const getLocationById = (id: string): { location: Location | null } => {
  const location = locationsData.find((l) => l.id === id) || null

  return { location }
}
