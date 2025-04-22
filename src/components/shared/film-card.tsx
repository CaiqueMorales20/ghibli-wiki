import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

export const FilmCard = ({
  film,
  index = 0,
  defaultDelay = 0,
}: {
  film: Film
  index?: number
  defaultDelay?: number
}) => {
  const { dictionary, locale } = useLanguage()

  const transitionConfig = {
    enter: {
      duration: 0.2,
      delay: defaultDelay + index * 0.05,
      ease: 'easeOut',
    },
    exit: {
      duration: 0,
      delay: 0,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={transitionConfig}
      layout
    >
      <Link href={`/${locale}/filmes/${film.id}`} className="group">
        <Card className="overflow-hidden rounded-lg border py-0 transition-all duration-300 hover:shadow-xl">
          <div className="relative h-[200px] w-full overflow-hidden sm:h-[250px] md:h-[300px]">
            <Image
              src={film.movie_banner || film.image}
              alt={dictionary.films.titles[film.id] || film.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          <CardContent className="p-4">
            <CardTitle className="font-serif text-lg text-amber-900 md:text-xl">
              {dictionary.films.titles[film.id] || film.title}
            </CardTitle>
            <CardDescription className="mt-1 line-clamp-2 text-xs text-amber-800/80 md:text-sm">
              {dictionary.films.descriptions[film.id] || film.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col items-start justify-between border-t p-4 text-xs text-amber-800 sm:flex-row sm:items-center md:text-sm">
            <div>
              {dictionary.films.director}
              {film.director}
            </div>
            <div className="mt-2 sm:mt-0">{film.release_date}</div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
