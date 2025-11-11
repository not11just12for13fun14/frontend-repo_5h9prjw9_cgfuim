import GlowCard from '../components/GlowCard'
import SectionHeader from '../components/SectionHeader'

const tech = [
  { title: 'AI Compression', desc: 'Neural codecs reduce bitrate up to 40% while preserving cinema-grade quality.' },
  { title: 'Renewable Data Centers', desc: 'Workloads orchestrated to regions with high renewable penetration.' },
  { title: 'Blockchain Tracking', desc: 'Every stream’s carbon path measured and verified on-chain.' },
]

export default function Technology(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Technology" title="The engine behind green performance" subtitle="The backbone that makes green performance possible." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tech.map((t,i)=> (
            <GlowCard key={i} title={t.title} desc={t.desc} delay={i*0.05} />
          ))}
        </div>
      </section>
    </main>
  )
}
