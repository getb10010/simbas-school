import { Navbar } from "../components/Navbar"
import { Founder } from "../components/Founder"

export function FounderPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-[100px] min-h-screen">
        <Founder />
      </main>
      
      <footer className="py-12 text-center text-white/40 text-sm font-semibold border-t border-white/10 uppercase tracking-widest relative z-10 bg-black/5 mt-auto">
        <p>© 2026. Simba's School. Түркістан.</p>
        <p className="mt-2 text-xs opacity-50">Барлық құқықтар қорғалған.</p>
      </footer>
    </>
  )
}
