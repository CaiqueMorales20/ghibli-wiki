import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const FilmCardSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-lg border py-0 shadow-sm">
      <Skeleton className="h-[200px] w-full rounded-t-lg sm:h-[250px] md:h-[300px]" />
      <CardContent className="bg-neutral-50 p-4">
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-1 h-4 w-3/4" />
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between border-t bg-neutral-50 p-4 sm:flex-row sm:items-center">
        <Skeleton className="mb-2 h-4 w-24 sm:mb-0" />
        <Skeleton className="h-4 w-20" />
      </CardFooter>
    </Card>
  )
}
