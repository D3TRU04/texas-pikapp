import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import Officers from './components/Officers'

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Officers />
        <Cta />
      </main>
      <Footer />
    </div>
  )
} 