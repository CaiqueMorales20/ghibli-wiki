'use client'

import { motion } from 'framer-motion'

import { FilmCard } from '@/components/shared/film-card'
import { Film } from '@/interfaces'

export function FilmsGrid({ films }: { films: Film[] }) {
  return films?.map((film, index) => (
    <motion.div
      key={film.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.9 + index * 0.1,
        ease: 'easeOut',
      }}
    >
      <FilmCard film={film} />
    </motion.div>
  ))
}
