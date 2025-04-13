'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

import { defaultLocale, locales } from '@/middleware'

import { type Locale } from './dictionaries'
import { type Translation } from './translations'

// Define language context type
type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionary: Translation
  currentFlag: string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export const LanguageProvider = ({
  children,
  dictionary,
  locale: initialLocale,
}: {
  children: ReactNode
  dictionary?: Translation
  locale?: string
}) => {
  const pathname = usePathname()
  const router = useRouter()

  // Get language from URL path
  const pathnameLocale = pathname.split('/')[1] as Locale
  const isValidLocale = locales.includes(pathnameLocale as Locale)

  const [locale, setLocale] = useState<Locale>(
    isValidLocale
      ? (pathnameLocale as Locale)
      : initialLocale
        ? (initialLocale as Locale)
        : defaultLocale,
  )

  const [currentFlag, setCurrentFlag] = useState(
    locale === 'en' ? '/flags/us.svg' : '/flags/br.svg',
  )

  const updateLocale = useCallback(
    (newLocale: Locale) => {
      setLocale(newLocale)

      // Update flag accordingly
      if (newLocale === 'en') {
        setCurrentFlag('/flags/us.svg')
      } else if (newLocale === 'pt') {
        setCurrentFlag('/flags/br.svg')
      }

      // Redirect to the same page with new locale
      if (isValidLocale && pathnameLocale !== newLocale) {
        const newPath = pathname.replace(`/${pathnameLocale}`, `/${newLocale}`)
        router.push(newPath)
      }
    },
    [pathname, pathnameLocale, isValidLocale, router],
  )

  const value = {
    locale,
    setLocale: updateLocale,
    dictionary: dictionary || ({} as Translation),
    currentFlag,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
