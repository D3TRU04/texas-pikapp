import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import Officers from './components/Officers'
import { Stats } from './components/Stats'

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-charcoal-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Officers />
        <Cta />
      </main>
      <Footer />
    </div>
  )
} 