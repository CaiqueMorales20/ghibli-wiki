import peopleData from '../data/people.json'
import { Person } from '../interfaces'
import { normalizeText } from './films'

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

export const filterPeople = ({
  search,
}: {
  search: string
}): { people: Person[] } => {
  if (!search) return { people: peopleData }

  const normalizedSearch = normalizeText(search)

  const filteredPeople = peopleData.filter((person) => {
    const nameMatch = normalizeText(person.name).includes(normalizedSearch)

    // Also search in other fields
    const genderMatch = normalizeText(person.gender).includes(normalizedSearch)
    const eyeColorMatch = normalizeText(person.eye_color).includes(
      normalizedSearch,
    )
    const hairColorMatch = normalizeText(person.hair_color).includes(
      normalizedSearch,
    )
    const speciesMatch = normalizeText(person.species).includes(
      normalizedSearch,
    )

    return (
      nameMatch ||
      genderMatch ||
      eyeColorMatch ||
      hairColorMatch ||
      speciesMatch
    )
  })

  return { people: filteredPeople }
}
