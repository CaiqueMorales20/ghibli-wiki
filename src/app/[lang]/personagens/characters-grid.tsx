'use client'

import { motion } from 'framer-motion'

import { CharacterCard } from '@/components/shared/character-card'
import { Person } from '@/interfaces'

export function CharactersGrid({ characters }: { characters: Person[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters?.map((character, index) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: 'easeOut',
          }}
        >
          <CharacterCard person={character} />
        </motion.div>
      ))}
    </div>
  )
}
