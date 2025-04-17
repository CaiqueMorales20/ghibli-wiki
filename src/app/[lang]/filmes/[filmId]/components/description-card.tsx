'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

interface DescriptionCardProps {
  film: Film
}

export function DescriptionCard({ film }: DescriptionCardProps) {
  const { dictionary } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.films.description}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-gray-700">
          {dictionary.films.descriptions[film.id]}
        </p>
      </CardContent>
    </Card>
  )
}
