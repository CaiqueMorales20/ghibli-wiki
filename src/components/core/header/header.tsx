'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export const Header = () => {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm transition-colors duration-200">
      <div className="c-container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12">
            <Image
              src="/ghibli-logo.png"
              alt="Logo Studio Ghibli"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden text-xl font-bold text-gray-900 sm:inline-block">
            Ghibli Wiki
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base md:flex">
          <Link
            href="/"
            className="hover:text-primary font-medium text-gray-800 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/filmes"
            className="hover:text-primary font-medium text-gray-800 transition-colors"
          >
            Films
          </Link>
          <Link
            href="/characters"
            className="hover:text-primary font-medium text-gray-800 transition-colors"
          >
            Characters
          </Link>
          <Link
            href="/about"
            className="hover:text-primary font-medium text-gray-800 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            className="text-gray-800 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Ghibli Wiki</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="hover:text-primary py-2 text-base font-medium text-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/filmes"
                className="hover:text-primary py-2 text-base font-medium text-gray-800 transition-colors"
              >
                Films
              </Link>
              <Link
                href="/characters"
                className="hover:text-primary py-2 text-base font-medium text-gray-800 transition-colors"
              >
                Characters
              </Link>
              <Link
                href="/about"
                className="hover:text-primary py-2 text-base font-medium text-gray-800 transition-colors"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
