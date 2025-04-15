'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

import { useLanguage } from '@/lib/i18n/language-context'
import { getFilms } from '@/services/films'

import { FilmsGrid } from './films-grid'

export function Films() {
  const { films } = getFilms()
  const { dictionary } = useLanguage()
  const sectionRef = useRef(null)

  return (
    <motion.section
      ref={sectionRef}
      className="py-4 sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.9 }}
    >
      <motion.h2
        className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-8 sm:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {dictionary.films.collection}
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FilmsGrid films={films} />
      </div>
    </motion.section>
  )
}
