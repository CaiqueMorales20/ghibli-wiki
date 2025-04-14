import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { getDictionary, Locale } from '@/lib/i18n/dictionaries'
import { getFilmById } from '@/services/films'

import { DescriptionCard } from './components/description-card'
import { DetailsCard } from './components/details-card'
import { FilmBanner } from './components/film-banner'
import { ProductionCard } from './components/production-card'
import { TitleSection } from './components/title-section'

export default async function FilmPage({
  params,
}: {
  params: Promise<{ filmId: string; lang: string }>
}) {
  const { filmId, lang } = await params
  const { film } = getFilmById(filmId)
  const dictionary = await getDictionary(lang as Locale)

  if (!film) redirect('/')

  return (
    <div className="c-container relative min-h-screen overflow-hidden py-8 md:py-16">
      <Button className="mb-6" variant="outline" asChild>
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          {dictionary.nav.back_to_home}
        </Link>
      </Button>
      <div className="relative mx-auto grid min-h-screen grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="z-10 order-2 space-y-8 lg:order-1 lg:pr-12">
          <TitleSection film={film} />
          <DescriptionCard film={film} />
          <ProductionCard film={film} />
          <DetailsCard film={film} />
        </div>
        <div className="relative order-1 lg:order-2">
          <FilmBanner film={film} />
        </div>
      </div>
    </div>
  )
}
