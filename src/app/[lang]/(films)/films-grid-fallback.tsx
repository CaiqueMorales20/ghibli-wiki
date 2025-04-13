import { FilmCardSkeleton } from '@/components/shared/film-card-skeleton'

export function FilmsGridFallback() {
  return Array.from({ length: 8 }).map((_, index) => (
    <FilmCardSkeleton key={index} />
  ))
}
