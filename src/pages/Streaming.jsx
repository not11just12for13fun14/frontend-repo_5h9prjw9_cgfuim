import { motion } from 'framer-motion'

const items = [
  { title: 'AI Recommendations', desc: 'Context-aware, privacy-preserving recommendations tuned for energy efficiency.' },
  { title: 'Eco-friendly Ads', desc: 'Green ad marketplace with verifiable low-carbon delivery and brand safety.' },
  { title: 'Watch-to-Earn', desc: 'Reward users with green tokens for watching sustainable content.' },
]

export default function Streaming(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Streaming</motion.h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">A next-gen platform that blends personalization with sustainability.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it,i) => (
            <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:.6}} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-medium" style={{fontFamily:'Space Grotesk'}}>{it.title}</h3>
              <p className="mt-2 text-zinc-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
