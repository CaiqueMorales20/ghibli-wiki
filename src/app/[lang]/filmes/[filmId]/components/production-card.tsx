'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

interface ProductionCardProps {
  film: Film
}

export function ProductionCard({ film }: ProductionCardProps) {
  const { dictionary } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.films.production}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">
            {dictionary.films.director_label}
          </h3>
          <p className="text-gray-700">{film.director}</p>
        </div>
        <Separator />
        <div>
          <h3 className="text-lg font-medium">
            {dictionary.films.producer_label}
          </h3>
          <p className="text-gray-700">{film.producer}</p>
        </div>
      </CardContent>
    </Card>
  )
}
