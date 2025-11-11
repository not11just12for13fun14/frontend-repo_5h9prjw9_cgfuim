import { motion } from 'framer-motion'
import GlowCard from '../components/GlowCard'
import SectionHeader from '../components/SectionHeader'

const items = [
  { title: 'AI Recommendations', desc: 'Context-aware, privacy-preserving recommendations tuned for energy efficiency.' },
  { title: 'Eco-friendly Ads', desc: 'Green ad marketplace with verifiable low-carbon delivery and brand safety.' },
  { title: 'Watch-to-Earn', desc: 'Reward users with green tokens for watching sustainable content.' },
]

export default function Streaming(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Streaming" title="Immersive. Efficient. Planet-positive." subtitle="A next-gen platform that blends personalization with sustainability." />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it,i) => (
            <GlowCard key={i} title={it.title} desc={it.desc} delay={i*0.05} />
          ))}
        </div>

        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.7, delay:.1}} className="mt-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(0,255,140,0.18),_transparent_60%)] flex items-center justify-center">
            <span className="text-zinc-300">Demo player area</span>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
