import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Courses } from "../components/Courses"
import { Branches } from "../components/Branches"
import { PricingCTA } from "../components/PricingCTA"

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-[100px]">
        <Hero />
        <About />
        <Courses />
        <Branches />
        <PricingCTA />
      </main>
      
      <footer className="py-12 text-center text-white/40 text-sm font-semibold border-t border-white/10 uppercase tracking-widest relative z-10 bg-black/5">
        <p>© 2026. Simba's School. Түркістан.</p>
        <p className="mt-2 text-xs opacity-50">Барлық құқықтар қорғалған.</p>
      </footer>
    </>
  )
}
