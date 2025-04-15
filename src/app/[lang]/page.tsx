import { Films } from '@/app/[lang]/(homepage)/(films)/films'
import { Hero } from '@/app/[lang]/(homepage)/(hero)/hero'

export default function Home() {
  return (
    <main className="min-h-screen py-8 md:py-16">
      <div className="c-container">
        <Hero />
        <Films />
      </div>
    </main>
  )
}
