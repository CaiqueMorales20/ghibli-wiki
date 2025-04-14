import { useQuery } from '@tanstack/react-query'

import { getPeople, getPersonById } from '../services/people'

export function usePeople() {
  return useQuery({
    queryKey: ['people'],
    queryFn: async () => {
      const { people, error } = await getPeople()
      if (error) throw error
      return people
    },
  })
}

export function usePersonById(id: string) {
  return useQuery({
    queryKey: ['people', id],
    queryFn: async () => {
      const { person, error } = await getPersonById(id)
      if (error) throw error
      return person
    },
    enabled: !!id,
  })
}
