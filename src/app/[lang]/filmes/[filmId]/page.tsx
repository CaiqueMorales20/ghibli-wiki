'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'
import { getFilmById } from '@/services/films'

import { DescriptionCard } from './components/description-card'
import { DetailsCard } from './components/details-card'
import { FilmBanner } from './components/film-banner'
import { ProductionCard } from './components/production-card'
import { TitleSection } from './components/title-section'

export default function FilmPage() {
  const { filmId, lang } = useParams()
  const { film } = getFilmById(filmId as string)
  const { dictionary } = useLanguage()

  if (!film) redirect('/')

  return (
    <div className="c-container relative min-h-screen overflow-hidden py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Button className="mb-6" variant="outline" asChild>
          <Link href={`/${lang}`}>
            <ArrowLeft className="h-4 w-4" />
            {dictionary.nav.home}
          </Link>
        </Button>
      </motion.div>
      <div className="relative mx-auto grid min-h-screen grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          className="z-10 order-2 space-y-8 lg:order-1 lg:pr-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <TitleSection film={film} />
          <DescriptionCard film={film} />
          <ProductionCard film={film} />
          <DetailsCard film={film} />
        </motion.div>
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <FilmBanner film={film} />
        </motion.div>
      </div>
    </div>
  )
}
