import { motion } from 'framer-motion'

const solutions = [
  { title: 'Green Advertising', desc: 'Deliver campaigns with measurable carbon reductions and premium reach.' },
  { title: 'Enterprise Cloud Migration', desc: 'Move workloads with a greener SLA and built-in sustainability KPIs.' },
  { title: 'Sustainability Analytics', desc: 'Granular emissions dashboards and automated ESG reporting.' },
]

export default function Business(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Business Solutions</motion.h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">Tools for brands and enterprises to decarbonize media and cloud.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {solutions.map((s,i)=> (
            <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:.6}} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-medium" style={{fontFamily:'Space Grotesk'}}>{s.title}</h3>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
