'use client'

import { motion } from 'framer-motion'
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
import { useLanguage } from '@/lib/i18n/language-context'

import { LanguageSwitcher } from '../language-switcher/language-switcher'

export const Header = () => {
  const { locale, dictionary } = useLanguage()
  const navSection = dictionary.nav

  // Get the base path without the locale prefix
  const getLocalizedPath = (path: string) => {
    return `/${locale}${path === '/' ? '' : path}`
  }

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        bounce: 0.01,
        duration: 0.7,
      },
    },
  }

  return (
    <motion.header
      className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm transition-colors duration-200"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="c-container flex h-16 items-center justify-between py-4">
        <Link href={getLocalizedPath('/')} className="flex items-center gap-2">
          <div className="relative h-18 w-18">
            <Image
              src="/ghibli-logo.png"
              alt="Logo Studio Ghibli"
              fill
              className="object-contain drop-shadow-md filter"
              priority
            />
          </div>
          <span className="hidden text-xl font-bold text-gray-900 sm:inline-block">
            Ghibli Wiki
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-base">
            <Link
              href={getLocalizedPath('/')}
              className="font-medium text-gray-800 transition-colors"
            >
              {navSection.home}
            </Link>
            <Link
              href={getLocalizedPath('/filmes')}
              className="font-medium text-gray-800 transition-colors"
            >
              {navSection.films}
            </Link>
            <Link
              href={getLocalizedPath('/personagens')}
              className="font-medium text-gray-800 transition-colors"
            >
              {navSection.characters}
            </Link>
            <Link
              href={getLocalizedPath('/sobre')}
              className="font-medium text-gray-800 transition-colors"
            >
              {navSection.about}
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />

          <Sheet>
            <SheetTrigger className="text-gray-800" aria-label="Open menu">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Ghibli Wiki</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                <Link
                  href={getLocalizedPath('/')}
                  className="py-2 text-base font-medium text-gray-800 transition-colors"
                >
                  {navSection.home}
                </Link>
                <Link
                  href={getLocalizedPath('/filmes')}
                  className="py-2 text-base font-medium text-gray-800 transition-colors"
                >
                  {navSection.films}
                </Link>
                <Link
                  href={getLocalizedPath('/personagens')}
                  className="py-2 text-base font-medium text-gray-800 transition-colors"
                >
                  {navSection.characters}
                </Link>
                <Link
                  href={getLocalizedPath('/personagens')}
                  className="py-2 text-base font-medium text-gray-800 transition-colors"
                >
                  {navSection.characters}
                </Link>
                <Link
                  href={getLocalizedPath('/sobre')}
                  className="py-2 text-base font-medium text-gray-800 transition-colors"
                >
                  {navSection.about}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
