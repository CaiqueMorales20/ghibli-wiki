import { Films } from './(films)/films'
import { Hero } from './(hero)/hero'

export function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 lg:px-8">
      <div className="c-container">
        <Hero />

        <Films />
      </div>
    </main>
  )
}

export default Home
