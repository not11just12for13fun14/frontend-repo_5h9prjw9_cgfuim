import SectionHeader from '../components/SectionHeader'

export default function About(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="About" title="Engineering the internet’s green future" subtitle="Zero-Carbon was founded with a singular mission: make the internet’s most demanding experiences sustainable by design." />
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <p className="text-zinc-300 leading-relaxed">Our team combines deep video engineering, applied AI, cloud orchestration, and climate science to deliver carbon-neutral streaming and cloud services. We build for performance without compromise, proving that premium can be planet-positive.</p>
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0">
            <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6">
              <div className="text-zinc-400 text-sm">HQ</div>
              <div className="mt-1 text-lg" style={{fontFamily:'Space Grotesk'}}>Rudolfplatz 7, 50674 Köln, Germany</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
