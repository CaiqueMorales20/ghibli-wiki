import peopleData from '../data/people.json'
import { Person } from '../interfaces'

export const getPeople = (): { people: Person[] } => {
  return { people: peopleData }
}

export const getPersonById = (id: string): { person: Person | null } => {
  const person = peopleData.find((p) => p.id === id) || null

  return { person }
}
