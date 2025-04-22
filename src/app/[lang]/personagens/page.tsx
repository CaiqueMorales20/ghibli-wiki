'use client'

import { motion } from 'framer-motion'
import { useQueryState } from 'nuqs'

import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/i18n/language-context'
import { filterPeople } from '@/services/people'

import { CharactersGrid } from './characters-grid'

function CharactersPage() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' })
  const { dictionary } = useLanguage()
  const { people } = filterPeople({ search: search || '' })

  return (
    <main className="min-h-screen py-8 md:py-16">
      <div className="c-container">
        <motion.section
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
            {dictionary.people.collection}
          </motion.h2>

          <Input
            placeholder={dictionary.people.search_placeholder}
            className="mb-4"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />

          <CharactersGrid characters={people} />
        </motion.section>
      </div>
    </main>
  )
}

export default CharactersPage
