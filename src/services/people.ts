import peopleData from '../data/people.json'
import { Person } from '../interfaces'

export const getPeople = (): { people: Person[] } => {
  return { people: peopleData }
}

export const getPeopleByFilmId = (filmId: string): { people: Person[] } => {
  const people = peopleData.filter((p) => p.films.includes(filmId))

  return { people }
}

export const getPersonById = (id: string): { person: Person | null } => {
  const person = peopleData.find((p) => p.id === id) || null

  return { person }
}
