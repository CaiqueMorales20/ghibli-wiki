import { Films } from '@/app/[lang]/(films)/films'
import { Hero } from '@/app/[lang]/(hero)/hero'

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 lg:px-8">
      <div className="c-container">
        <Hero />
        <Films />
      </div>
    </main>
  )
}
