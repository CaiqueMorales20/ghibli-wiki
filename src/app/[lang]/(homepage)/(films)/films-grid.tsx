'use client'

import { AnimatePresence } from 'framer-motion'

import { FilmCard } from '@/components/shared/film-card'
import { Film } from '@/interfaces'

export const FilmsGrid = ({ films }: { films: Film[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AnimatePresence initial={false}>
        {films?.map((film, index) => (
          <FilmCard key={film.id} defaultDelay={0} film={film} index={index} />
        ))}
      </AnimatePresence>
    </div>
  )
}
