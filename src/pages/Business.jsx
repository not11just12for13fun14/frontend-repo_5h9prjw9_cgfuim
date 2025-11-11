import GlowCard from '../components/GlowCard'
import SectionHeader from '../components/SectionHeader'

const solutions = [
  { title: 'Green Advertising', desc: 'Deliver campaigns with measurable carbon reductions and premium reach.' },
  { title: 'Enterprise Cloud Migration', desc: 'Move workloads with a greener SLA and built-in sustainability KPIs.' },
  { title: 'Sustainability Analytics', desc: 'Granular emissions dashboards and automated ESG reporting.' },
]

export default function Business(){
  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Solutions" title="Built for brands and enterprises" subtitle="Tools for brands and enterprises to decarbonize media and cloud." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {solutions.map((s,i)=> (
            <GlowCard key={i} title={s.title} desc={s.desc} delay={i*0.05} />
          ))}
        </div>
      </section>
    </main>
  )
}
