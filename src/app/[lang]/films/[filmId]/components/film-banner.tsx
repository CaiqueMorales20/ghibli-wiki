'use client'

import { MaskedImage } from '@/components/ui/masked-image'
import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

interface FilmBannerProps {
  film: Film
}

export function FilmBanner({ film }: FilmBannerProps) {
  const { dictionary } = useLanguage()

  return (
    <div className="relative w-full lg:absolute lg:top-0 lg:right-0 lg:h-full">
      <MaskedImage
        src={film.movie_banner}
        alt={dictionary.films.titles[film.id]}
        width={1920}
        height={1080}
        variant="shape1"
        className="h-full w-full translate-y-[-5%] object-cover object-center md:translate-y-[-10%] lg:translate-y-[-5%]"
      />
    </div>
  )
}
