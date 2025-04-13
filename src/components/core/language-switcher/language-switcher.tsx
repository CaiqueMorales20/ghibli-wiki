import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const LanguageSwitcher = ({
  currentFlag,
  setCurrentFlag,
}: {
  currentFlag: string
  setCurrentFlag: (flag: string) => void
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <Button variant={'outline'} size="sm" className="h-8 px-2">
          <div className="relative h-4 w-6 rounded">
            <Image
              src={currentFlag}
              alt="Selected language flag"
              fill
              className="object-cover"
            />
          </div>
          <ChevronDown size={14} className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setCurrentFlag('/flags/us.svg')}>
          <Image
            src="/flags/us.svg"
            alt="USA Flag"
            width={20}
            height={14}
            className="mr-2 rounded"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrentFlag('/flags/br.svg')}>
          <Image
            src="/flags/br.svg"
            alt="Brazil Flag"
            width={20}
            height={14}
            className="mr-2 rounded"
          />
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
