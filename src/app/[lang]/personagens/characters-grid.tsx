'use client'

import { CharacterCard } from '@/components/shared/character-card'
import { Person } from '@/interfaces'

export function CharactersGrid({ characters }: { characters: Person[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters?.map((character, index) => (
        <CharacterCard
          key={character.id}
          person={character}
          index={index}
          defaultDelay={0.3}
        />
      ))}
    </div>
  )
}
