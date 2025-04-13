import { FilmCard } from '@/components/shared/film-card'
import { getFilms } from '@/lib/api'

export async function FilmsGrid() {
  const { films, error } = await getFilms()

  if (error) return <div>Error: {error.message}</div>

  return films?.map((film) => <FilmCard key={film.id} film={film} />)
}
