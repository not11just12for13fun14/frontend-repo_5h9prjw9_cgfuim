import { motion } from 'framer-motion'

const tech = [
  { title: 'AI Compression', desc: 'Neural codecs reduce bitrate up to 40% while preserving cinema-grade quality.' },
  { title: 'Renewable Data Centers', desc: 'Workloads orchestrated to regions with high renewable penetration.' },
  { title: 'Blockchain Tracking', desc: 'Every stream’s carbon path measured and verified on-chain.' },
]

export default function Technology(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Technology</motion.h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">The backbone that makes green performance possible.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tech.map((t,i)=> (
            <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:.6}} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-medium" style={{fontFamily:'Space Grotesk'}}>{t.title}</h3>
              <p className="mt-2 text-zinc-300">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
