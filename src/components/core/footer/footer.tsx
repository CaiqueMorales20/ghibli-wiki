'use client'

import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-6"
    >
      <Separator className="mb-6" />
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://github.com/CaiqueMorales20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/caique-morales/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://instagram.com/caique_brad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
        <p className="text-muted-foreground px-4 text-center text-xs sm:text-sm">
          Created with ❤️ by Caique Morales
        </p>
        <p className="text-muted-foreground px-4 text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Ghibli Wiki. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
