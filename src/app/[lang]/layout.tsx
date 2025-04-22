import '@/app/globals.css'

// eslint-disable-next-line
import { Nunito, PT_Sans } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Footer } from '@/components/core/footer/footer'
import { Header } from '@/components/core/header/header'
import { getDictionary, Locale } from '@/lib/i18n/dictionaries'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { locales } from '@/middleware'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const ptSans = PT_Sans({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  // Properly await the params object
  const { lang } = await params
  const validLang = locales.includes(lang as Locale) ? (lang as Locale) : 'en'
  const dictionary = await getDictionary(validLang)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  // Await params to access lang
  const { lang } = await params
  const validLang = locales.includes(lang as Locale) ? (lang as Locale) : 'en'
  const dictionary = await getDictionary(validLang)

  return (
    <html lang={validLang}>
      <body
        className={`${nunito.variable} ${ptSans.variable} relative antialiased`}
      >
        <div className="texture" />
        <LanguageProvider dictionary={dictionary} locale={validLang}>
          <NuqsAdapter>
            <Header />
            {children}
            <Footer />
          </NuqsAdapter>
        </LanguageProvider>
      </body>
    </html>
  )
}
