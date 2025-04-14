'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import { getFilms } from '@/services/films'

import { FilmsGrid } from './films-grid'

export function Films() {
  const { films } = getFilms()
  const { dictionary } = useLanguage()

  return (
    <section className="py-4 sm:py-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-8 sm:text-3xl">
        {dictionary.films.collection}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FilmsGrid films={films} />
      </div>
    </section>
  )
}
