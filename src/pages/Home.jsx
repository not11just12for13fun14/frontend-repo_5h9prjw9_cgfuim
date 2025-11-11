import Hero from '../components/Hero'
import GlowCard from '../components/GlowCard'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'AI-Driven Efficiency',
    desc: 'Personalized streams with fewer bits using neural codecs and on-device inference.',
  },
  {
    title: 'Renewable by Default',
    desc: 'Every request routed to green regions and offset with verifiable RECs.',
  },
  {
    title: 'On-Chain Proof',
    desc: 'Every watt-hour tracked and certifiable through blockchain partners.',
  },
]

export default function Home(){
  return (
    <main className="bg-transparent text-white">
      <Hero />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,140,0.12),transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Zero-Carbon" title="Built for a cleaner internet" subtitle="Sustainable by design. Optimized by AI. Verified on-chain." />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f,i) => (
              <GlowCard key={i} title={f.title} desc={f.desc} delay={i*0.05} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
