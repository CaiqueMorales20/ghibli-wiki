'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Person } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'
import { getSpeciesById } from '@/services/species'

export function CharacterCard({ person }: { person: Person }) {
  const { species } = getSpeciesById(person.species)
  const { dictionary: dict } = useLanguage()

  const getAgeTranslation = (age: string) => {
    const normalizedAge = age.toLowerCase()
    if (normalizedAge === 'unknown') return dict.people.unknown
    if (normalizedAge === 'unspecified/adult') return dict.people.unspecified
    if (normalizedAge === 'unspecified/elderly') return dict.people.elderly
    if (normalizedAge === 'middle age') return dict.people.middle_age
    if (normalizedAge === 'late teens') return dict.people.late_teens
    if (normalizedAge === 'really old') return dict.people.really_old
    if (normalizedAge === 'na') return dict.people.na
    if (normalizedAge === 'elder') return dict.people.elderly
    if (normalizedAge === 'adult') return dict.people.adult
    return age
  }

  const getGenderTranslation = (gender: string) => {
    if (gender.toUpperCase() === 'N/A' || gender.toUpperCase() === 'NA') {
      return dict.people.genders.NA
    }

    const normalizedGender =
      gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()
    return (
      dict.people.genders[
        normalizedGender as keyof typeof dict.people.genders
      ] || gender
    )
  }

  const getColorTranslation = (color: string): string => {
    if (color.toLowerCase().includes('bald, but beard is')) {
      const beardColor: string = color.split('is')[1].trim()
      const translatedBeardColor: string = getColorTranslation(beardColor)
      return `Calvo, mas a barba é ${translatedBeardColor}`
    }

    if (
      color.toUpperCase() === 'NONE' ||
      color.toUpperCase() === 'N/A' ||
      color.toUpperCase() === 'NA'
    ) {
      return dict.people.na
    }

    const normalizedColor = color
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return (
      dict.people.colors[normalizedColor as keyof typeof dict.people.colors] ||
      color
    )
  }

  const getSpeciesTranslation = (speciesName: string) => {
    const normalizedSpecies =
      speciesName.charAt(0).toUpperCase() + speciesName.slice(1).toLowerCase()
    return (
      dict.people.speciesTypes[
        normalizedSpecies as keyof typeof dict.people.speciesTypes
      ] || speciesName
    )
  }

  return (
    <Card className="flex flex-col overflow-hidden pt-0">
      <CardHeader className="flex-none space-y-0 px-6 py-4">
        <CardTitle className="text-xl">{person.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 px-6">
        <div className="space-y-1">
          <p className="text-sm text-gray-600">
            <span className="font-medium">{dict.people.gender}:</span>{' '}
            {getGenderTranslation(person.gender)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{dict.people.age}:</span>{' '}
            {getAgeTranslation(person.age)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{dict.people.eye_color}:</span>{' '}
            {getColorTranslation(person.eye_color)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{dict.people.hair_color}:</span>{' '}
            {getColorTranslation(person.hair_color)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{dict.people.species}:</span>{' '}
            {species?.name
              ? getSpeciesTranslation(species.name)
              : dict.people.unknown}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
