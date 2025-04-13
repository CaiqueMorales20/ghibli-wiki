import { apiClient } from '../client'
import { Person } from '../types'

export interface PeopleResponse {
  people: Person[]
  error: Error | null
}

export interface PersonResponse {
  person: Person | null
  error: Error | null
}

export const getPeople = async (): Promise<PeopleResponse> => {
  let error = null
  let people: Person[] = []

  try {
    people = await apiClient.get<Person[]>('/people')
    return { people, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch people: ${message}`)
    return { people, error }
  }
}

export const getPersonById = async (id: string): Promise<PersonResponse> => {
  let error = null
  let person = null

  try {
    person = await apiClient.get<Person>(`/people/${id}`)
    return { person, error }
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    error = new Error(`Failed to fetch person with ID ${id}: ${message}`)
    return { person, error }
  }
}
