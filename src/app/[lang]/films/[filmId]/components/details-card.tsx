'use client'

import { Clock, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Film } from '@/interfaces'
import { useLanguage } from '@/lib/i18n/language-context'

interface DetailsCardProps {
  film: Film
}

export function DetailsCard({ film }: DetailsCardProps) {
  const { dictionary } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.films.details}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">
            {dictionary.films.release_date}
          </h3>
          <p className="text-gray-700">{film.release_date}</p>
        </div>
        <Separator />
        <div>
          <h3 className="text-lg font-medium">
            {dictionary.films.running_time}
          </h3>
          <TooltipProvider>
            <Tooltip>
              <div className="mt-2">
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-lg"
                  >
                    <Clock className="h-4 w-4" />
                    <span>{film.running_time} min</span>
                  </Badge>
                </TooltipTrigger>
              </div>
              <TooltipContent side="bottom" className="max-w-[200px]">
                <p>{dictionary.films.running_time_tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Separator />
        <div>
          <h3 className="text-lg font-medium">{dictionary.films.rt_score}</h3>
          <TooltipProvider>
            <Tooltip>
              <div className="mt-2">
                <TooltipTrigger asChild>
                  <Badge
                    variant="secondary"
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-lg ${
                      Number(film.rt_score) >= 90
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : Number(film.rt_score) >= 70
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    <Star className="h-4 w-4 fill-current" />
                    <span>{film.rt_score}%</span>
                  </Badge>
                </TooltipTrigger>
              </div>
              <TooltipContent
                side="bottom"
                className="max-w-[200px] text-center"
              >
                <p>{dictionary.films.rt_score_tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
