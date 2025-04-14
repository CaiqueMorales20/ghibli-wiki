import vehiclesData from '../data/vehicles.json'
import { Vehicle } from '../interfaces'

export const getVehicles = (): Vehicle[] => {
  return vehiclesData
}

export const getVehicleById = (id: string): Vehicle | null => {
  return vehiclesData.find((v) => v.id === id) || null
}
