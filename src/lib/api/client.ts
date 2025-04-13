const BASE_URL = 'https://ghibliapi.vercel.app'

export const apiClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return response.json() as Promise<T>
  },
}

export const handleApiError = (error: unknown): never => {
  console.error('API Error:', error)
  if (error instanceof Error) {
    throw new Error(error.message || 'An error occurred with the API request')
  }

  throw new Error('An unknown error occurred')
}
