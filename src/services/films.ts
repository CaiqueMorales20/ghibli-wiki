import filmsData from '../data/films.json'
import { Film } from '../interfaces'
import { Locale } from '../lib/i18n/dictionaries'
import enDictionary from '../lib/i18n/dictionaries/en.json'
import ptDictionary from '../lib/i18n/dictionaries/pt.json'
import { Translation } from '../lib/i18n/translations'

export const getFilms = ({
  search,
  locale = 'en',
}: {
  search: string
  locale?: Locale
}): { films: Film[] } => {
  if (!search) return { films: filmsData }

  const searchLower = search.toLowerCase()

  const filteredFilms = filmsData.filter((film) => {
    const originalTitleMatch = film.title.toLowerCase().includes(searchLower)

    const currentDict =
      locale === 'en'
        ? (enDictionary as Translation)
        : (ptDictionary as Translation)
    const otherDict =
      locale === 'en'
        ? (ptDictionary as Translation)
        : (enDictionary as Translation)

    const currentLocaleTitle = currentDict.films.titles[film.id] || ''
    const currentLocaleTitleMatch = currentLocaleTitle
      .toLowerCase()
      .includes(searchLower)

    const otherLocaleTitle = otherDict.films.titles[film.id] || ''
    const otherLocaleTitleMatch = otherLocaleTitle
      .toLowerCase()
      .includes(searchLower)

    return (
      originalTitleMatch || currentLocaleTitleMatch || otherLocaleTitleMatch
    )
  })

  return { films: filteredFilms }
}

export const getFilmById = (id: string): { film: Film | null } => {
  const film = filmsData.find((f) => f.id === id) || null

  return { film }
}
