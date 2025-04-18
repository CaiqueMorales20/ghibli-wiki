'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MaskedImage } from '@/components/ui/masked-image'
import { useLanguage } from '@/lib/i18n/language-context'

export default function AboutPage() {
  const { dictionary: dict } = useLanguage()

  return (
    <main className="from-ghibli-light to-ghibli-dark min-h-screen bg-gradient-to-b px-2 py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-8 flex flex-col items-center gap-2 sm:mb-12 sm:gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MaskedImage
            src="/ghibli-logo.png"
            alt="Studio Ghibli Logo"
            width={150}
            height={150}
            variant="shape1"
            className="mb-2 sm:mb-4 sm:h-[200px] sm:w-[200px]"
          />
          <h1 className="text-ghibli-primary text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            {dict.about.title}
          </h1>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pt-4 sm:pt-6">
                <CardTitle className="text-ghibli-secondary text-xl sm:text-2xl">
                  {dict.about.studioGhibli}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 sm:pb-6">
                <p className="text-sm text-gray-700 sm:text-base">
                  {dict.about.studioGhibliDescription}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pt-4 sm:pt-6">
                <CardTitle className="text-ghibli-secondary text-xl sm:text-2xl">
                  {dict.about.thisWiki}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 sm:pb-6">
                <p className="text-sm text-gray-700 sm:text-base">
                  {dict.about.creator.text}{' '}
                  <Link
                    href="https://www.linkedin.com/in/caique-morales/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ghibli-primary hover:underline"
                  >
                    {dict.about.creator.name}
                  </Link>
                  {dict.about.creator.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader className="pt-4 sm:pt-6">
                <CardTitle className="text-ghibli-secondary text-xl sm:text-2xl">
                  {dict.about.contribution}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 sm:pb-6">
                <p className="text-sm text-gray-700 sm:text-base">
                  {dict.about.contributionDescription}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
