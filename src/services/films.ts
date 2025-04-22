import filmsData from '../data/films.json'
import { Film } from '../interfaces'
import { Locale } from '../lib/i18n/dictionaries'
import enDictionary from '../lib/i18n/dictionaries/en.json'
import ptDictionary from '../lib/i18n/dictionaries/pt.json'
import { Translation } from '../lib/i18n/translations'

export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export const getFilms = ({
  search,
  locale = 'en',
}: {
  search: string
  locale?: Locale
}): { films: Film[] } => {
  if (!search) return { films: filmsData }

  const normalizedSearch = normalizeText(search)

  const filteredFilms = filmsData.filter((film) => {
    const originalTitleMatch = normalizeText(film.title).includes(
      normalizedSearch,
    )

    const currentDict =
      locale === 'en'
        ? (enDictionary as Translation)
        : (ptDictionary as Translation)
    const otherDict =
      locale === 'en'
        ? (ptDictionary as Translation)
        : (enDictionary as Translation)

    const currentLocaleTitle = currentDict.films.titles[film.id] || ''
    const currentLocaleTitleMatch =
      normalizeText(currentLocaleTitle).includes(normalizedSearch)

    const otherLocaleTitle = otherDict.films.titles[film.id] || ''
    const otherLocaleTitleMatch =
      normalizeText(otherLocaleTitle).includes(normalizedSearch)

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
