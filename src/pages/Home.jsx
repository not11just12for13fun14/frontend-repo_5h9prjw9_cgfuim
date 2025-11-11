import Hero from '../components/Hero'
import { motion } from 'framer-motion'

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
    <main className="bg-[#0B0B0B] text-white">
      <Hero />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,140,0.12),transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-2xl md:text-4xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Built for a cleaner internet</motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {features.map((f,i) => (
              <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1, duration:.6}} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-medium" style={{fontFamily:'Space Grotesk'}}>{f.title}</h3>
                <p className="mt-2 text-zinc-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
