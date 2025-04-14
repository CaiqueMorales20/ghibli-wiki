'use client'

import { FilmCard } from '@/components/shared/film-card'
import { Film } from '@/interfaces'

export function FilmsGrid({ films }: { films: Film[] }) {
  return films?.map((film) => <FilmCard key={film.id} film={film} />)
}
