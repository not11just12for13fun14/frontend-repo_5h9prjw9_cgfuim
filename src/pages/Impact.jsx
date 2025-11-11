import { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'

function useCounter(target, duration = 2000){
  const [value, setValue] = useState(0)
  useEffect(() => {
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(target * eased)
      setValue(current)
      if(progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])
  return value
}

export default function Impact(){
  const co2 = useCounter(1287432)
  const renewable = useCounter(86)
  const users = useCounter(214578)

  return (
    <main className="bg-transparent text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="Impact" title="Proof, not promises" subtitle="Live metrics showing the difference we make together." />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <StatCard label="CO₂ Saved" value={`${co2.toLocaleString()} kg`}/>
          <StatCard label="Renewable Energy Use" value={`${renewable}%`}/>
          <StatCard label="Active Users" value={users.toLocaleString()}/>
        </div>
      </section>
    </main>
  )
}

function StatCard({label, value}){
  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/0">
      <div className="relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute -inset-40 bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(0,255,140,0.18),_transparent_30%)] blur-2xl" />
        <div className="relative p-6">
          <div className="text-zinc-400 text-sm">{label}</div>
          <div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily:'Space Grotesk'}}>{value}</div>
        </div>
      </div>
    </div>
  )
}
