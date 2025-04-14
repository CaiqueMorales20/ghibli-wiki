'use client'

import { useFilms } from '@/lib/api/hooks/films'

import { FilmsGrid } from './films-grid'
import { FilmsGridFallback } from './films-grid-fallback'

export function Films() {
  const { data: films, isLoading } = useFilms()

  return (
    <section className="py-4 sm:py-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-8 sm:text-3xl">
        Films Collection
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? <FilmsGridFallback /> : <FilmsGrid films={films ?? []} />}
      </div>
    </section>
  )
}
