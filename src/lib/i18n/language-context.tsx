'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import { locales } from '@/middleware'

import { type Locale } from './dictionaries'
import { type Translation } from './translations'

// Define language context type
type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionary: Translation
  currentFlag: string
  ready: boolean
}

const LOCALE_STORAGE_KEY = 'preferredLocale'

// Create a separate component that only renders when hydration is complete
function HydrationBlocker({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  // During server-side rendering and initial client render, return nothing
  if (!hydrated) {
    return null
  }

  // After hydration, render children
  return <>{children}</>
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
  const initialized = useRef(false)
  const [ready, setReady] = useState(false)

  // Get language from URL path
  const pathnameLocale = pathname.split('/')[1] as Locale
  const isValidPathLocale = locales.includes(pathnameLocale as Locale)

  // Use a ref to track the source of truth for locale
  const localeRef = useRef<Locale>(
    isValidPathLocale
      ? (pathnameLocale as Locale)
      : (initialLocale as Locale) || 'pt',
  )

  // State follows the ref
  const [locale, setLocaleState] = useState<Locale>(localeRef.current)

  // Flag follows the locale ref
  const [currentFlag, setCurrentFlag] = useState(() =>
    localeRef.current === 'en' ? '/flags/us.svg' : '/flags/br.svg',
  )

  // One comprehensive initialization effect
  useEffect(() => {
    if (typeof window === 'undefined' || initialized.current) return

    // Function to update everything consistently
    const updateLocaleData = (newLocale: Locale) => {
      localeRef.current = newLocale
      setLocaleState(newLocale)
      setCurrentFlag(newLocale === 'en' ? '/flags/us.svg' : '/flags/br.svg')
    }

    try {
      // Check localStorage for saved preference
      const savedLocale = localStorage.getItem(
        LOCALE_STORAGE_KEY,
      ) as Locale | null
      const validSavedLocale =
        savedLocale && locales.includes(savedLocale as Locale)
          ? (savedLocale as Locale)
          : null

      if (validSavedLocale) {
        // Update with saved locale
        updateLocaleData(validSavedLocale)

        // Update URL if needed and safe to do so
        if (pathname && router) {
          if (isValidPathLocale && pathnameLocale !== validSavedLocale) {
            router.replace(
              pathname.replace(`/${pathnameLocale}`, `/${validSavedLocale}`),
            )
          } else if (!isValidPathLocale) {
            router.replace(
              `/${validSavedLocale}${pathname === '/' ? '' : pathname}`,
            )
          }
        }
      } else {
        // If no valid saved locale, use Portuguese as default
        const defaultLocale: Locale = 'pt'
        updateLocaleData(defaultLocale)
        localStorage.setItem(LOCALE_STORAGE_KEY, defaultLocale)

        // Update URL if needed
        if (pathname && router && !isValidPathLocale) {
          router.replace(`/${defaultLocale}${pathname === '/' ? '' : pathname}`)
        }
      }
    } catch (error) {
      // Handle errors (e.g., localStorage blocked)
      console.error('Error accessing localStorage:', error)
    }

    // Mark as initialized and ready
    initialized.current = true
    setReady(true)
  }, [pathname, router, pathnameLocale, isValidPathLocale])

  // Save to localStorage when locale changes (but not during initialization)
  useEffect(() => {
    if (typeof window !== 'undefined' && initialized.current) {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale)
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }, [locale])

  // Wrapper for setLocale
  const setLocale = useCallback(
    (newLocale: Locale) => {
      // Update state and ref
      localeRef.current = newLocale
      setLocaleState(newLocale)
      setCurrentFlag(newLocale === 'en' ? '/flags/us.svg' : '/flags/br.svg')

      // Update URL
      if (pathname && router) {
        if (isValidPathLocale) {
          const newPath = pathname.replace(
            `/${pathnameLocale}`,
            `/${newLocale}`,
          )
          router.push(newPath)
        } else {
          router.push(`/${newLocale}${pathname === '/' ? '' : pathname}`)
        }
      }
    },
    [pathname, router, pathnameLocale, isValidPathLocale],
  )

  const value = {
    locale,
    setLocale,
    dictionary: dictionary || ({} as Translation),
    currentFlag,
    ready,
  }

  return (
    <LanguageContext.Provider value={value}>
      <HydrationBlocker>{children}</HydrationBlocker>
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
