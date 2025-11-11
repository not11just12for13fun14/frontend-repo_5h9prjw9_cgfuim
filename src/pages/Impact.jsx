import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function useCounter(target, duration = 2000){
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (target - start) * eased)
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
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Impact Dashboard</motion.h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">Live metrics showing the difference we make together.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card label="CO₂ Saved" value={`${co2.toLocaleString()} kg`}/>
          <Card label="Renewable Energy Use" value={`${renewable}%`}/>
          <Card label="Active Users" value={users.toLocaleString()}/>
        </div>
      </section>
    </main>
  )
}

function Card({label, value}){
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <div className="text-zinc-400 text-sm">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily:'Space Grotesk'}}>{value}</div>
    </div>
  )
}
