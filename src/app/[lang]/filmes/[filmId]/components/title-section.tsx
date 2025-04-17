'use client'

import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

interface TitleSectionProps {
  film: Film
}

export function TitleSection({ film }: TitleSectionProps) {
  const { dictionary } = useLanguage()

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">{dictionary.films.titles[film.id]}</h1>
      <p className="text-xl text-gray-600">{film.original_title}</p>
    </div>
  )
}
