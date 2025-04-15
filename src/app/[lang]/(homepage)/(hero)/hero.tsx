'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguage } from '@/lib/i18n/language-context'

export function Hero() {
  const { dictionary } = useLanguage()
  const heroSection = dictionary.hero

  return (
    <section className="mb-8 flex flex-col items-center justify-center gap-4 px-4 text-center md:mb-16 md:gap-6 md:px-0">
      <motion.div
        className="relative h-24 w-full sm:h-28 md:h-40 lg:h-48"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src="/ghibli-logo.png"
          alt="Logo Studio Ghibli"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.h1
        className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {heroSection.title}
      </motion.h1>
      <motion.p
        className="max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {heroSection.description}
      </motion.p>
    </section>
  )
}
